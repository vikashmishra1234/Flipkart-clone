const express = require('express');
const { signUp, seller, login } = require('../user-controller/user');
const {addProduct, getAllProducts, getProductCategorywise, checkOutProduct, addToCart, getCartProducts, removeCart} = require('../user-controller/product.js');


const Router = express.Router();

Router.get('/seller',seller);
Router.get('/get/cart',getCartProducts);
Router.get('/get/products',getAllProducts);
Router.get('/get/products/categorywise',getProductCategorywise);
Router.get('/checkout/product',checkOutProduct);

Router.delete('/remove/cart/:productId',removeCart);


Router.post('/add/cart',addToCart);
Router.post('/add/products',addProduct);
Router.post('/seller',seller);
Router.post('/signup',signUp);
Router.post('/login',login);

module.exports = Router;