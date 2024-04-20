import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Home from "./Home";
import Admin from "./admin/Admin";
import SignupPage from "./auth/SignUp";
import Search from "./components/search/Search";
import Checkout from "./components/products/Checkout";
import Cart from "./components/cart/Cart";
import CartMain from "./components/cart/CartMain";
import Order from "./components/PlaceOrder.jsx/Order";
import Footer from "./components/products/Footer";
import LoginPage from "./auth/Login";

function App() {

  const [change,setChange] = useState(false);
  useEffect(()=>{

  },[])

  return (
    <div>
      <Router>
        <Navbar change={change} setChange={setChange}/>
    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/order" element={<Order />}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/search" element={<Search/>} key={Math.random()}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/cart" element={<CartMain Change={change} />}/>


          
        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
