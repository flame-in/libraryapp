const express = require('express');
const booksRouter = express.Router();

const Bookdata = require('../model/Bookdata');

function router(nav){
    // var books = [ 
    //     {   title:'The Hobbit',
    //         author:'J R R Tolkien',
    //         genre:'Fantasy',
    //         img:"hobbit.jpg"
    //     },
    //     {
    //         title:'The Alchemist',
    //         author:'Paulo Coelho',
    //         genre:'Drama',
    //         img:"alchemist.jpg"
    //     },
    //     {
    //         title:'Harry Potter',
    //         author:'J K Rowling',
    //         genre:'Fantasy',
    //         img:"hp.jpg"
    //     }
    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                nav,
                title:'Books',
                books
            });
        })
        
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',
            {
            nav,
            title:'View book - LibraryApp',
            book
            });
        })
        
    });

    return booksRouter;
}



module.exports = router;