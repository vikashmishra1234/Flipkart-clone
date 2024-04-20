import axios from "axios"
const url = 'http://localhost:5000';

const config= {
    headers:{
        "Authorization":`bearer ${localStorage.getItem("jwt")}`
    }
}

export const addProduct=async(data)=>{
    
    try {
        
        let res = await axios.post(`${url}/api/add/products`,data,config);
        return res.data;
    } catch (error) {
        console.log(error)
        
    }
}
export const getAllProducts=async()=>{
    
    try {
        
        let res = await axios.get(`${url}/api/get/products`);
        return res.data;
    } catch (error) {
        console.log(error)
        
    }
}
export const removeCart=async(productId)=>{
    
    try {
        
        let res = await axios.delete(`${url}/api/remove/cart/${productId}`,config);
        return res.data;
    } catch (error) {
        console.log(error)
        
    }
}
export const getProductCategoryWise=async(category)=>{
    
    try {
        
        let res = await axios.get(`${url}/api/get/products/categorywise/?category=${category}`,config);
        return res.data;
    } catch (error) {
        console.log(error)
        
    }
}
export const checkoutProduct=async(productId)=>{
    
    try {
        
        let res = await axios.get(`${url}/api/checkout/product/?productId=${productId}`,config);
        return res.data;
    } catch (error) {
        console.log(error)
        
    }
}
export const getCartProducts=async()=>{
    
    try {
        
        let res = await axios.get(`${url}/api/get/cart`,config);
        return res.data;
    } catch (error) {
        console.log(error)
      
    }
}
export const addToCart=async(productId)=>{
    
    try {
      
        let res = await axios.post(`${url}/api/add/cart`,{productId},config);
        return res.data;
    } catch (error) {
        console.log(error)
        
    }
}
export const loginUser=async(data)=>{
    try {
        const res = await axios.post(`${url}/api/login`,data);
        return res.data
    } catch (error) {
        console.log(error.message);
    }
}