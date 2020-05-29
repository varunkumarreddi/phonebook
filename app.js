var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

const route= require('./routes/route');



var app = express();

app.use('/api',route);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost:27017/phonebook');

mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb');
});

const port=3000;

app.listen(port,()=>{
    console.log("server started at port"+port);
});
