//mongo data model for user

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    isUser: Boolean,
    isAdmin: Boolean
});


module.exports = mongoose.model('User', UserSchema);
