const cart = require("../models/cart");
const product = require("../models/product");
const seller = require("../models/seller");
const user = require("../models/user");

exports.addProduct=async(req,res)=>{

    try {
        const Seller = await seller.findOne({userId:req.user});
        if(!Seller){
            return res.status(401).json({success:false,error:'you are not a seller'})
        }
       req.body.sellerName=Seller.sellerName;
        req.body.sellerId = Seller._id;
        const newProduct = await product(req.body);
        await newProduct.save();
        return res.status(200).json({success:true,seller:newProduct,message:'product added'})
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success:false,error:error.message});
    }

}

exports.getAllProducts=async(req,res)=>{
   
    try {
        
      
        const Products =await product.find({});
        if(Products.length===0 || !Products){
          
            return res.json({error:'no product found',success:false})
        }
        return res.status(200).json({success:true,Products:Products})
    } catch (error) {
        console.log(error.message);
        return res.json({success:false,error:error.message})
    }
}

exports.getProductCategorywise = async(req,res)=>{
    try {
        
        const category = req.query.category;
        const regexPattern = new RegExp(category, 'i');
        const result = await product.find({
            $or: [
              { productName: { $regex: regexPattern } },
              { category: { $regex: regexPattern } }
            ]
          });        if(result.length===0){
            return res.status(200).json({message:'No product found',success:false})
        }
        return res.status(200).json({success:true,products:result})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:error.message,success:false})
    }
   
}

exports.checkOutProduct=async(req,res)=>{
    try {
        
        const productDetails = await product.findById(req.query.productId);
      
        if(!productDetails){
            return res.status(404).json({success:false,error:"unable to find the product details"});
    
        }
        return res.status(200).json({success:true,productDetails:productDetails});
    } catch (error) {
        return res.status(500).json({success:false,error:error.message});
    }
}

exports.addToCart=async(req,res)=>{
    try {
        req.body.userId=req.user;
        
        const newProduct = await cart(req.body);
        await newProduct.save();
        return res.status(200).json({success:true,message:'addded to cart sucessfully'})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success:false,error:error.message});
    }

}

exports.getCartProducts=async(req,res)=>{
    try {
        const Cart = await cart.find({});
    
        if(!Cart || Cart.length===0){
                return res.status(200).json({error:'cart is empty'})
        }
        const Data = [];
        for (const data of Cart) {
            try {
                const Product = await product.findOne({ _id: data.productId });
                if (data.userId === req.user) {
                    Data.push(Product);
                }
            } catch (error) {
                console.log(error.message);
                throw new Error("something went wrong");
            }
        }
        return res.status(200).json({success:true,data:Data})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success:false,error:error.message});
    }
}

exports.removeCart=async(req,res)=>{
   try {
   const carts = await cart.findOne({productId:req.params.productId})
  
   const response= await cart.deleteOne({productId:req.params.productId});

  return res.status(200).json({success:true,message:'deleted successfully'});
   } catch (error) {
    console.log(error)
    return res.status(500).json({success:false,error:error.message});

   }
}