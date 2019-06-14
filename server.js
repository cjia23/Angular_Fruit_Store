// chunyang's backend server for fruitstore
// '/' for general get request
// '/user' for user database management
// '/fruit' for fruitlist database managementu



var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//database
mongoose.connect('mongodb://localhost:27017');
var User = require('./models/user');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

//Port set-up
var port = process.env.PORT || 3000;

var router = express.Router();

router.use(function(req,res,next) {
    console.log('Something is happening.');
    next();
});

router.get('/',function(req, res) {
  res.json({message: 'Woohoo, welcome to chunyang api!!!'});
});


router.route('/user')
  //register a new user
  .post(function(req,res) {
                
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    if (req.body.email == 'cjia23@uwo.ca'){
      user.isAdmin = true
    } else {
      user.isAdmin = false
    }
    user.isUser = true;
    
    user.save(function(err) {
      if(err)
        res.send(err);
                     
      res.json({message: 'User registered!'});
      console.log("new user " + req.body.email + "has been registered.")
      });
      
    })
  
  //get the user list
  .get(function(req,res){
    User.find(function(err,user){
    if(err)
      res.send(err);
                  
    res.json(user);
      });
    })
        
router.route('/user/:id')
        
  .get(function(req, res){
          
    User.findById(req.params.id,function(err,user){
        if(err)
            res.send(err);
          
        res.json(user);
    });
  })

  .put(function(req,res){
          
    User.findById(req.params.id,function(err,user){
      if(err)
        res.send(err);
      user.isAdmin = req.body.isAdmin;
      
      
      user.save(function(err){
          if(err)
            res.send(err);
            
          res.json({message: 'Given admin power to this user.'});
      });
    });
  })
  
  //delete an user from the server
  .delete(function(req,res){
    User.deleteOne({_id: req.params.id}, function(err, user){
      if(err)
        res.send(err);
      console.log("deleted one record" + req.params.id)
      res.json({message: 'Successfully deleted'});
      })
    
    });

app.use('',router);

app.listen(port);
console.log('Magic is happening at: ' + port);