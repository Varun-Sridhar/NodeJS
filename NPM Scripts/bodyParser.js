const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use('/' , (req, res, next)=>{
    console.log('in empty url');
    //next();
});

app.use('/add-product', (req, res)=>{
    console.log('In add product');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"> Add Product</button></input></form>');
});

app.use('/product', (req,res)=>{
    console.log(req.body);
    res.redirect('/');
});

app.listen(3000);