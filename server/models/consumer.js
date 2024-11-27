const mongoose = require('mongoose')
const consumerSchema = new mongoose.Schema({
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
module.exports = mongoose.model('consumer', consumerSchema);
