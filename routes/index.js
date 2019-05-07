const express = require('express')
const app = express.Router()

app.get('/', function(req, res){
  res.send('hello world, this is brian jia.')
})

module.exports = router