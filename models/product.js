const mongoose = require('mongoose');

const signUpSchema = mongoose.Schema({
    images:{
        type:Array,
        
    },
    category:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    highlight1:{
        type:String,
        required:true
    },
    highlight2:{
        type:String,
        required:true
    },
    highlight3:{
        type:String,
        required:true
    },
    highlight4:{
        type:String,
       
    },
    price:{
        type:String,
        
    },
    discount:{
        type:String,
        
    },
    highlight5:{
        type:String,
        
    },
    highlight6:{
        type:String,
        
    },
    offer1:{
        type:String,
        
    },
    offer2:{
        type:String,
        
    },
    offer3:{
        type:String,
        
    },
    offer4:{
        type:String
      
    },
    
    sellerId:{
        type:String,
    },
    sellerName:{
        type:String,
    },
    productName:{
        type:String,
    }
   
});

module.exports = mongoose.model('product',signUpSchema);