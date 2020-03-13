const path = require('path');
const express = require('express');
const bp = require('body-parser');

const app = express();

const adminData = require('./routes/admin');  // These can be used to navigate to the respective files in the folders
const shopRoutes = require('./routes/shop');

app.use(bp.urlencoded({extended:false})); //This is used to get the data that is read from the html pages

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404NotFound.html'));
});

app.listen(3000);


