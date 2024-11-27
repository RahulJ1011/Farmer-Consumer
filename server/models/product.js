const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    image:String,
    owner: String,
    email: String,
});

module.exports = mongoose.model('Product', productSchema);
