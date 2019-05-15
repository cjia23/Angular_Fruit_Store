//mongo data model for user

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: String,
    isUser: Boolean,
    isAdmin: Boolean
});


module.exports = mongoose.model('User', UserSchema);
