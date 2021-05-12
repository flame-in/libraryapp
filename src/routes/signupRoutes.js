const express = require('express');
const signupRouter = express.Router();

function Srouter(){
    
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
            title:'Log In',
        });
    });
    
    // signupRouter.get('/:id',function(req,res){
    //     const id = req.params.id;
    //     res.render("book",
    //     {
    //         nav,
    //         title:'Book',
    //         book: books[id]
    //     })
    // })

    return signupRouter;
}


module.exports = Srouter;