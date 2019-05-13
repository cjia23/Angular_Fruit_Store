//mongo data model for fruit item

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FruitSchema = new Schema({
    name: String,
    quantity: Number,
    tax_rate: Number,
    price: Number
});

module.exports = mongoose.model('Fruit',FruitSchema);