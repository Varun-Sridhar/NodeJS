const http = require('http');
const express = require('express');

//const routes = require('./routes');
//console.log(routes.someText);

const app = express();
app.use('/add-Product', (req, res, next)=> {
    res.send('<h1>Add Products</h1>');
});
app.use('/', (req, res, next)=> {
    res.send('<h1>Welcome to Express.js</h1>');
});

const server = http.createServer(app);

server.listen(8080);
  