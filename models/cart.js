const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
 
    productId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
  
   
});

module.exports = mongoose.model('cart',cartSchema);