import React from 'react'
import Cart from './Cart'
import Total from './Total'
import { getCartProducts } from '../../Api/Services';
import { useState,useEffect } from 'react';
import {Loader} from  '../../Loader/Loader.jsx'
import Swal from 'sweetalert2';
import { info } from 'sass';
import { useNavigate } from 'react-router-dom';

const CartMain = ({Change}) => {
    const [cartProduct,setCartProduct] = useState([]);
    const [change,setChange] = useState(false);
    const [isEmpty,setEmpty] = useState(false);
    const [loader,setLoader] = useState(false);
    const Navigate = useNavigate()
    useEffect(()=>{
        const getData=async()=>{
            setLoader(true)
            const res = await getCartProducts();
            setLoader(false)
            if(res.data){

                setCartProduct(res.data);
            }
            else{
                alert('cart is empty');
                setEmpty(true)
            }
        }
        getData()
    },[change,Change])
  return (
    <>
    {
        localStorage.getItem('jwt')?
    <div className='d-flex ps-3 justify-content-around mt-4'>
        {
            loader?<Loader/>:''
        }
        {
            cartProduct.length===0?(
                <div>
                    <h3>Nothing To show here</h3>
                    <div> your cart is empty</div>
                </div>
            ):""
        }
        {
           !isEmpty&& cartProduct.length>0&&<Cart change={change} setChange={setChange} cartProduct={cartProduct}/>
        }
        {
            !isEmpty&&cartProduct.length>0&&<Total cartProduct={cartProduct}/>
        }
        
    </div>:Navigate('/login')
    }
    </>
  )
}

export default CartMain