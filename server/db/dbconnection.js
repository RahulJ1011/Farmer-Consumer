const mongoose = require('mongoose');
const { insertProduct } = require('../controllers/staticdata');

const connection = ()=>
{
    const DB = "mongodb+srv://rahul876j:farm123@cluster0.6pzna.mongodb.net/"
    mongoose.connect(DB);
    insertProduct();
    console.log("mongoose is connected");
}

module.exports = {connection}