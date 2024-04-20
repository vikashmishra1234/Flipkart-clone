const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
    profile:{
        type:String,
        default:'profile'
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   
});

module.exports = mongoose.model('user',signUpSchema);