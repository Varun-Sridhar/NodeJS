const http = require('http');
const express = require('express');

const app = express();

app.use('/', (req, res, next)=> {
    console.log('<h1> Empty URL</h1>');
    res.send('<h1> Empty URL</h1>')
    next();
});

app.use('/user', (req, res, next)=>{
    console.log('Users');
    res.send('<h1> Users </h1>');
});

app.listen(3000);