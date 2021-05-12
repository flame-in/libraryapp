const express = require('express');
const authorRouter = express.Router();

const Authordata = require('../model/Authordata');

function Arouter(nav){
    // var authors = [ 
    //     {   name:'J R R Tolkien',
    //         country:'England',
    //         genre:'Fantasy, Adventure',
    //         img:"tolkien.jpg",
    //         books:['The Hobbit','Lord of the Rings'],
    //         description:"John Ronald Reuel Tolkien CBE FRSL was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings."
    //     },
    //     {
    //         name:'Paulo Coelho',
    //         country:'Brazil',
    //         genre:'Quest, Fantasy, Drama',
    //         img:"coelho.jpg",
    //         books:['The Alchemist','Eleven Minutes'],
    //         description:"Paulo Coelho de Souza is a Brazilian lyricist and novelist, best known for his novel The Alchemist. In 2014, he uploaded his personal papers online to create a virtual Paulo Coelho Foundation."
    //     },
    //     {
    //         name:'J K Rowling',
    //         country:'England',
    //         genre:'Fantasy, Adventure',
    //         img:"rowling.jpg",
    //         books:['Harry Potter','Fantastic Beasts'],
    //         description:"Joanne Rowling, better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter."
    //     }
    
    // ]
    
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",
            {
                nav,
                title:'Authors - LibraryApp',
                authors
            });
        })
        
    });
    
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author',
            {
            nav,
            title:'View author - LibraryApp',
            author
            });
        })
        
    });


    return authorRouter;
}



module.exports = Arouter;