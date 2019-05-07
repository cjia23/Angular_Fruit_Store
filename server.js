//load express module
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//database 
mongoose.connect('mongodb://localhost:3000/item')
var Item = require('./models/item')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

//using the routers detail can be checked in the index and users files
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)