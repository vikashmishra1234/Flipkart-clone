import React, { useState } from "react";
import { addToCart } from "../../Api/Services";
import {useNavigate} from 'react-router-dom'

const CheckoutContainer = ({ productDetails }) => {
  const [imgIndex, setImage] = useState(0);
  const [clicked,setClick] = useState(false);
  const Navigate = useNavigate();
  const handleHover = (ind) => {
    setImage(ind);
  };
  const handleCart=async(productId)=>{
    if(localStorage.getItem("jwt")){

      const res = await addToCart(productId);
      if(res.success){
        setClick(true);
        Navigate('/cart')
      }
    
    }
  }
  return (
    <main className="checkout-container">
      <div className="slid-container">
        {productDetails.images[0].map((img, ind) => (
          <img onMouseEnter={() => handleHover(ind)} src={img} alt="" />
        ))}
      </div>

      <section className="checkout-image-container">
        <img src={productDetails.images[0][imgIndex]} alt="" />
        <div className="button-container">
          <button  style={{background:clicked?'lightgray':''}} disabled={clicked} onClick={()=>{handleCart(productDetails._id)}} id="cart">Add to Cart</button>
          <button onClick={()=>Navigate('/order')} >Place Order</button>
        </div>
      </section>
      <section className="product-details">
        <h4>
          {productDetails.productName} ({productDetails.color})
        </h4>
        ₹ 1000 extra off
        <h2>₹{productDetails.price}</h2>
        <div>
          <strong>Available Offers</strong>
          <ul>
            <div className="li">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />{" "}
              <li >{productDetails.offer1} 5% Cashback on Flipkart Axis Bank Card</li>
            </div>
            <div className="li">
                <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
              <li className="">{productDetails.offer2} Get extra ₹4500 off (price inclusive of cashback/coupon)</li>
            </div>
            <div className="li">
                <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
              <li className="">{productDetails.offer3} Flat ₹650 off on Cleartrip flights booking along with 300 supercoins on booking</li>
            </div>
            <div className="li">
                <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
              />
              <li className="">{productDetails.offer4} Spotify Premium - 3M at ₹119</li>
            </div>
          </ul>
          <strong>highlights</strong>
          <ul>
            <li>
                {productDetails.highlight1}
            </li>
            <li>
                {productDetails.highlight2}
            </li>
            <li>
                {productDetails.highlight3}
            </li>
            <li>
                {productDetails.highlight4}
            </li>
            <li>
                {productDetails.highlight5}
            </li>
            <li>
                {productDetails.highlight6}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CheckoutContainer;
