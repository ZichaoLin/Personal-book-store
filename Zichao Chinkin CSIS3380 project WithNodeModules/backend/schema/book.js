const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
     
      title: {
        type:String,
        required:[true,"please check the Entry, there is no title"] 
        },
        author:{
            type:String
        },
        publisher: {
            type:String
        }, 
        category: {
            type:String
        },
        price: {
            type:Number,
            required:[true,"please enter the price"] 
        },
        img:{
            type:String
        },
        qty: {
            type:Number,
        },     
})

const book = mongoose.model("book",bookSchema)

module.exports=book;