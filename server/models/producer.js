const mongoose = require('mongoose')
const producerSchema = new mongoose.Schema({
    Email:{
        type:String,
        required:true

    },
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('producer', producerSchema);
