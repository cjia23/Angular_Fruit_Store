//load express module
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//database 
mongoose.connect('mongodb://localhost:27017')


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

//using the routers detail can be checked in the index and users files
const fruitRouter = require('./routes/fruit')
const userRouter = require('./routes/user')

app.use('/', fruitRouter)
app.use('/user', userRouter)

app.listen(3000)
console.log("Magic is happening at port 3000. Welcome to chunyang's Fruitstore API.")