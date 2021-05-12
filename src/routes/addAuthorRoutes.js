const express = require('express');
const AddAuthorRouter = express.Router();
const Authordata = require('../model/Authordata');


function router(nav){
    AddAuthorRouter.get('/',function(req,res){
        res.render('addauthor',{
            nav,
            title:'LibraryApp - Admin actions'
        })
    })

    AddAuthorRouter.post('/add',function(req,res){

        var item = {
            name: req.body.name,
            country: req.body.country,
            genre : req.body.genre,
            image: req.body.image,
            description: req.body.description
        }
       
        var author = Authordata(item);
        author.save(); //saving to database
        res.redirect("/home/authors");
       
    })

return AddAuthorRouter;
}

module.exports = router;