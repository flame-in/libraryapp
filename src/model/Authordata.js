//Accessing Mongoose
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<database>?retryWrites=true&w=majority');

// Schema definition
const Schema  =  mongoose.Schema;

// Defining structure of single book Schema
const AuthorSchema = new Schema({
    name: String,
    country: String,
    genre: String,
    image: String,
    works: String,
    description: String
});

//Creating model
const Authordata = mongoose.model('authordata',AuthorSchema);

//Exporting model for use in other areas
module.exports = Authordata;

