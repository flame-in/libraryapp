//Accessing Mongoose
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<database>?retryWrites=true&w=majority');

// Schema definition
const Schema  =  mongoose.Schema;

// Defining structure of single book Schema
const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});

//Creating model
const Bookdata = mongoose.model('bookdata',BookSchema);

//Exporting model for use in other areas
module.exports = Bookdata;

