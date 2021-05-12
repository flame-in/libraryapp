const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const nav = [
    {link:'/home/books',name:'Books'},
    {link:'/home/authors',name:'Authors'},
    {link:'/admin',name:'Add Books'},
    {link:'/addauthor',name:'Add Authors'},
    {link:'/',name:'Log Out'}
];

const booksRouter = require('./src/routes/bookRoutes.js')(nav);
const authorRouter = require('./src/routes/authorRoutes.js')(nav);

const loginRouter = require('./src/routes/loginRoutes.js')();
const signupRouter = require('./src/routes/signupRoutes.js')();

const addBookRouter = require('./src/routes/addBookRoutes.js')(nav);
const addAuthorRouter = require('./src/routes/addAuthorRoutes.js')(nav);

app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"))
app.set('view engine','ejs');
app.set('views', __dirname+'/src/views');
app.use('/home/books',booksRouter);
app.use('/home/authors',authorRouter);

app.use('/admin',addBookRouter);
app.use('/addauthor',addAuthorRouter);

app.use('/login',loginRouter);
app.use('/signup',signupRouter);

app.get('/',function(req,res){
    res.render("login",
    {
        nav,
        title:'Log In'
    });
});

app.get('/home',function(req,res){
    res.render("home",
    {
        nav,
        title:'Dashboard - LibraryApp'
    });
});

app.listen(port,()=>{console.log("Server Ready at " + port)});