const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
  res.send('hello world, this is brian jia.')
})

module.exports = router