//load express module
const express = require('express')
const router = express.Router()

//database 
var User = require('../models/user')

//get all the userlist
router.get('/', function(req, res){
  
  User.find(function(err, user){
    if (err){
      res.send(err)
    }

    res.json(user)
    res.json({message: 'Get all the user list!'})
  })

  console.log("get the user info.")
})

//add an user to the list
router.post('/', function(req, res){
  var user = new User();
  user.username = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  user.isAdmin = false;
  user.isUser = true;

  user.save(function(err) {
    if(err)
       res.send(err);
       
    res.json({message: 'User created!'});
  });

})


module.exports = router