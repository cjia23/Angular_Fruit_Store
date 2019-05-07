//mongo data model for fruit item

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    name: String,
    quantity: Number,
    tax_rate: Number,
    price: Number
});

module.exports = mongoose.model('Item',ItemSchema);