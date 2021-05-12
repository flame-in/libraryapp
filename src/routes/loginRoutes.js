const express = require('express');
const loginRouter = express.Router();

function Lrouter(){
    
    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            title:'Log In',
        });
    });
    
    // loginRouter.get('/:id',function(req,res){
    //     const id = req.params.id;
    //     res.render("book",
    //     {
    //         nav,
    //         title:'Book',
    //         book: books[id]
    //     })
    // })

    return loginRouter;
}


module.exports = Lrouter;