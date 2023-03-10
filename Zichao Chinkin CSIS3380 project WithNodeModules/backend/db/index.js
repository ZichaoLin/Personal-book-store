const { boolean } = require("@hapi/joi");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/BooksStoreDB";

mongoose.connect(url);

console.log("database connected");

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    admin: { type: Boolean, default: false }
});


module.exports = {
    User,
    mongoose
};

// module.exports = { close }
