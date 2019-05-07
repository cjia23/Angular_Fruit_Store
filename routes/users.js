const express = require('express')
const app = express.Router()

app.get('/:name', function(req, res){
  res.send('hello, ' + req.params.name )
})

module.exports = router