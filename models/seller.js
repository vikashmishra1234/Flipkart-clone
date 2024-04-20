const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
   
   category:{
    type:String,
   },
   phone:{
    type:String,
   },
  
   sellerName:{
    type:String,
   },
   userId:{
      type:String
   }
    
});

module.exports = mongoose.model('seller',signUpSchema);