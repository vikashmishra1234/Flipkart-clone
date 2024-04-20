import React, { useEffect, useState } from 'react'
import Category from '../Category'
import '../products/style/style.scss'
import { getCartProducts, removeCart } from '../../Api/Services'
import { getAddress } from '../GetAdress'
import { Loader } from '../../Loader/Loader'

const Cart = ({cartProduct,setChange,change}) => {
const [address,setAdrress] = useState({});
const [loader,setLoader] = useState();

  const removeCartData=async(productId)=>{
    const res = await removeCart(productId);
    setChange(!change);
  }

  const getGeoLocation = async () => {
    setLoader(true);
      const data = await getAddress();
    console.log(data)
     setLoader(false);
     setAdrress(data.results[0].components)
     
   };
  
  return (
    <>
    {
      loader&&<Loader/>
    }
    <div className='section-container '>
       <section className='section-1'> <h2 className='text-center'>Your Cart</h2> </section>
       <section className='section-1 '>
        <input type="text" value={address.city} placeholder='city'  />
        <input type="text" value={address.state} placeholder='state'   />
        <input type="text" value={address.country} placeholder='country'   />
        <button className='btn btn-primary m-3' onClick={getGeoLocation}>use my current location</button>
       </section>
       <section className='section-3'>
        {
            cartProduct&&cartProduct.length>0&&cartProduct.map((product,index)=>(
                <div key={index} className='gap-5 pt-4 pb-4 ps-4 d-flex bg-white' style={{border:'.4px solid lightgray'}}>
                    <img height={'100vh'} src={product.images[0][0]} alt="" />
                    <div className='fs-5 d-flex flex-column gap-2'>
                        <strong>{product.productName}</strong>
                        <div className='fs-6'>{product.highlight1}</div>
                       <div>₹{product.price} <small className='text-success'>32% Off 5 offers applied</small> </div>
                            <button onClick={()=>removeCartData(product._id)} className='btn btn-primary'>Remove</button>
                        
                    </div>
                </div>
            ))
        }
       </section>
    </div>
    
    </>
  )
}

export default Cart