import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { checkoutProduct } from '../../Api/Services';
import { Loader } from '../../Loader/Loader';
import CheckoutContainer from './CheckoutContainer';
import Category from '../Category';
import AllCategory from './AllCategory';

const Checkout = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('productId');
  let arr = query.split("-7");
    const [loader,setLoader] = useState(false);
    const [productDetails,setDetails] = useState();
    const [productId,setProductId] = useState(arr[0])
 
  useEffect(()=>{
        const getCheckout=async()=>{
            setLoader(true);
            const res = await checkoutProduct(productId);
            if(res.success){
                setDetails(res.productDetails)
            }
            setLoader(false);
            console.log(res);
        }
       productId&&productId.length>0&&getCheckout();
  },[productId]);
  return (
    <div>
        {
            loader?<Loader/>:""
        }
        <Category display={'none'}/>
        {
            productDetails&&<CheckoutContainer productDetails={productDetails}/>
        }

      {productDetails&& <AllCategory category={productDetails.category} cat1={productDetails.category} cat2={productDetails.category} type={'you might also like'}/>} 
       
    </div>
  )
}

export default Checkout