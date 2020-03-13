const path = require('path');
const express = require('express');
const bp = require('body-parser');

const router = express.Router();

const products = [];

router.get('/add-product', (req,res,next)=>{
       res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html')); 
});

router.post('/add-product', (req,res,next)=>{
        products.push({title: req.body.title});
        //console.log(req.body);
        res.redirect('/');
});

router.get('find-product/{id}', (req,res,next)=>{
    
});

//module.exports = router;
exports.routes = router;
exports.products = products;