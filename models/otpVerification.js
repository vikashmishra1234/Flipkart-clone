const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    
    phone:{
        type:String,
        required:true
       },
       otp:{
          type:String,
          required:true
       },
})

module.exports = mongoose.model('otp',otpSchema)