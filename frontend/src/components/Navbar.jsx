import React, { useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({setChange,change}) => {
  const [token,setToken] = useState();
  const[click,setClick] = useState(false)
 
  useEffect(()=>{
    const jwt =  localStorage.getItem("jwt");
    if(jwt){
      setToken(jwt)
    }
    else{
      setToken(null)
      setChange(!change)
    }

  },[click, localStorage.getItem("jwt")])
 const Navigate = useNavigate();

 const handleKeyPress = (e)=>{
  e.preventDefault()
  if(e.keyCode===13){
   let Category = e.target.value;
   Navigate(`/search/?category=${Category}-7${Category}`);
  }

 }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className=" collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <img height={'34px'} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-plus_3b0baa.png" alt="" />
      <ul className="navbar-nav  w-75 justify-content-between mb-2 mb-lg-0 fs-5">
      <div className="d-flex  w-50 align-items-center bg-light ms-3 pe-3" >
        <input className=" form-control border-0 " onKeyUpCapture={handleKeyPress} type="search" placeholder="Search for products,brand and more" aria-label="Search"/>
        <IoSearch size={25} />
      </div>
        <li className="nav-item dropdown ">
          {
            token?
          <button className='btn btn-danger mt-1' onClick={()=>{localStorage.removeItem("jwt");setClick(!click)}}>
            logout
          </button>:<button className='btn btn-danger' onClick={()=>{Navigate('/signup')}}>login</button>
          }
         
        </li>
       {
        token&&<li className="nav-item">
        <Link to='/admin' className="text-white nav-link" >Add Product</Link>
      </li>
       } 
       <li className="nav-item">
        <Link to='/' className="text-white nav-link" >Home</Link>
      </li>
        <li className="nav-item dropdown">
          <Link to='/' className="text-white nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </Link>
          
        </li>
        <li className="nav-item d-flex align-items-center">
        <FaShoppingCart color='white' />
          <Link to='/cart' className="text-white nav-link" >Cart</Link>
        </li>
      
      </ul>
    
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar