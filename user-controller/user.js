const user = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const seller = require("../models/seller");
const path = require('path')
const secretKey = "vikash mishra"


exports.signUp = async(req,res)=>{
    const {phone,password,firstName,lastName}=req.body;
    try {
        if(!phone||!password||!firstName||!lastName){
            return res.json({success:false,error:"enter all the fields"});
        }
        const exits = await user.findOne({phone:req.body.phone});
        
        if(exits){
            return res.status(200).json({success:false,error:'user already exits'});
        }
        const salt =  bcrypt.genSaltSync(10);
        const hashPass =  bcrypt.hashSync(req.body.password,salt);
        req.body.password=hashPass;
        const newUser = user(req.body);
      
        await newUser.save()
        const data = {
            id:newUser._id,
            name:newUser.firstName
        }
        const token = await jwt.sign({ data }, secretKey);
        
       

      return res.status(200).json({success:true,token:token,message:'SignUp successfull'});
    } catch (error) {
        return res.status(200).json({success:false,error:error.message});

    }
}

exports.login=async(req,res)=>{
    try {
        
        const User = await user.findOne({phone:req.body.phone});
        if(!User){
            return res.json({success:false,error:'user not found'})
        }
   
        const verifyPass=  bcrypt.compareSync(req.body.password,User.password);
       if(!verifyPass){
        return res.status(201).json({success:false,error:'invalid password'})
       }
       const data = {
        id:User._id,
        name:User.firstName
    }
    const token = await jwt.sign({ data }, secretKey);
    return res.status(200).json({success:true,message:'Login successfull',jwt:token})
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({success:false,error:error.message});
    }
}

exports.seller=async(req,res)=>{
    try {
        if(req.method=="GET"){
            const Seller = await seller.findOne({userId:req.user});
            let category=Seller.category;
            if(category=='electronices'){
                
                return res.sendFile(path.join(__dirname,'../','public','electronic.html'))
            }
            else{
                return res.json({message:"invalid category",success:false})
            }

        }
        
        const exit = await seller.findOne({userId:req.user});
       const User = await user.findById(req.user)
        if(exit){
            return res.status(404).json({success:false,error:'you are already a sellerr'});
        }
        if(!User){
            return res.status(404).json({success:false,error:'user is not found '})
        }
        req.body.userId=req.user;
        req.body.sellerName = User.firstName+User.lastName;

        const newSeller = await seller(req.body);
       
        await newSeller.save()
        return res.status(200).json({sucess:true,message:"you become seller"})
    } catch (error) {
        return res.json({sucess:false,error:error.message});
    }
}