const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const Routes = require('./server/routes/router');
const connectDB = require('./server/database/connection');
const bodyParser = require('body-parser');

const app = express();
dotenv.config({path:'config.env'});


//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('common'));

//mogodb connection
connectDB();

//connect views engine
app.set("view engine","ejs");

//connect assets
app.use('/css',express.static(path.resolve(__dirname, "asstes/css")));
app.use('/js',express.static(path.resolve(__dirname, "asstes/js")));
app.use('/img',express.static(path.resolve(__dirname, "asstes/img")));

//load Router
app.use('/', Routes);


const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`server is up and running on http://localhost:${port}`);
})