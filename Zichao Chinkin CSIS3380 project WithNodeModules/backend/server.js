const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const { User, mongoose } = require('./db/index')
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use('/api/register', require('./routes/register'));
app.use('/api/login', require('./routes/login'));
app.use('/api/usersinfo', require('./routes/getUsers'));
app.use('/api/Delete', require('./routes/deleteUser'));
app.use('/api/Edit', require('./routes/updateUser'));
app.use((err, req, res, next) => {
    if (err instanceof Joi.ValidationError) {
        res.send({
            status: 1,
            msg: [err.details[0].context.label, err.details[0].message]
        })
    }
    res.send({
        status: 1,
        msg: err.message || err
    });
})







/////////////////////////////Start of Book data ///////////////////////////////
const bodyParser = require("body-parser");
const Book = require("./schema/book");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

// mongoDB connection url
const url = "mongodb://127.0.0.1:27017/BooksStoreDB";

/////////////////////////////////////////////////
/////1. READ OPERATION

app.get("/api/bookinfo", async (req, res) => {
// app.get("/api/bookinfo/:id", async (req, res) => {
  try {
    await mongoose.connect(url);
    console.log("database connected");
    Book.find((err, books) => {
      if (err) res.send("ERROR: ", err);
      else {
         res.send(books);
        // mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("ERROR: ", err);
  }
});
////2. handle delete database
app.delete("/api/bookinfo/:id", async (req, res) => {
    try {
      let _id = req.params.id;
      _id = mongoose.Types.ObjectId(_id);
      await mongoose.connect(url);
      console.log("database connected");
      Book.findByIdAndDelete({ _id: _id }, (err, doc) => {
        if (err) res.send(`ERROR: err`);
        else if (doc == null) {
          console.log(`No matching document could be found.`);
          res.send(`No matching document could be found.`);
        } else {
          console.log(`Document deleted successfully. ${doc}`);
          res.send(`Document deleted successfully. ${doc}`);
        }
        // mongoose.connection.close();
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  });
 
/// handle add book to database

///2. CREATE OPERATION (add)
app.post("/api/bookinfo", async (req, res) => {
    try {
      const { title,author,publisher,category,price,img } = req.body;
      console.log(title,author,publisher,category,price,img);
        
      const book = new Book({
        title,
        author,
        publisher,
        category,
        price,
        img,
        qty:0
      });
  
      await mongoose.connect(url);
      console.log("database connected");
      book.save((err) => {
        if (err) res.send("ERROR: ", err);
        else {
          console.log(`document inserted successfully`);
          res.send(book);
          // mongoose.connection.close();
        }
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  });

  // for update the Edit book in database
  app.post("/api/bookinfo/update/:id", async (req, res) => {
    try {
      const {title,author,publisher, category, price, img }= req.body;
      console.log(title,author,publisher,category,price,img);
  
      let _id = req.params.id;
      _id = mongoose.Types.ObjectId(_id);
      await mongoose.connect(url);
      console.log("database connected");
      await Book.findByIdAndUpdate(
        { _id: _id },
        { title,author,publisher,category,price,img },
        (err, doc) => {
          if (err) res.send(`ERROR: err`);
          else if (doc == null) {
            console.log(`No matching document could be found.`);
            res.send(`No matching document could be found.`);
          } else {
            console.log(`Document updated successfully. ${doc}`);
            res.send(`Document updated successfully. ${doc}`);
          }
          // mongoose.connection.close();
        }
      );
    } catch (err) {
      console.log("ERROR: ", err);
    }
  });



/////////////////////////////END of Book data ///////////////////////////////








app.listen(5000, () => console.log('Server running on localhost:5000'));