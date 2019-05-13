const express = require('express')
const router = express.Router()
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/user')
var User = require('../models/user')
var Item = require('../models/fruit')

router.get('/', function(req, res){
  res.send('hello world, this is brian jia.')
})

module.exports = router