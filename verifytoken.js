const jwt =  require('jsonwebtoken');
const secretKey = "vikash mishra";

const authenticateUser = async(req,res,next)=>{
   
    if(req.path==='/api/signup'||req.path==='/api/get/products'||req.path==='/api/checkout/product'){
        next()
    }
    else if(req.path==='/api/login'||req.path==='/api/get/products/categorywise/'||req.path==='/api/checkout/product/'){
       
        next()
    }
    else{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
      
        if(!token){
            return res.status(401).json({success:false,error:'token not found'});
        }
        jwt.verify(token,secretKey,(err,user)=>{
            if(err){
               
                return res.status(403).json({success:false,error:"invalid Token"})
            }
            req.user=user.data.id;
            req.userName=user.data.name;
            console.log(user.data)
           
            next()
        })
    }
   

}

module.exports = authenticateUser;