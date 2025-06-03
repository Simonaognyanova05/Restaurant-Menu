const mongoose = require('mongoose');


const dishSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: String, required: true},
})

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;