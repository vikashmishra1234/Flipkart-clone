import React, { useEffect, useState } from "react";

const Total = ({cartProduct}) => {
    
    const [totalPrice,setTotalPrice] = useState(0);
    const [distcount,setDiscount] = useState(2364);
    useEffect(()=>{
       console.log(cartProduct)
        var Price=0;
        for(const product of cartProduct){
            
            Price=Price+parseInt(product.price);
            
        }
            setTotalPrice(Price)
    },[cartProduct])
  return (
    <section className="d-flex flex-column bg-white w-25 h-75 p-3 ">
      <h3 style={{ color: "lightgray" }}>Price Details</h3>
      <hr color="lightgray" />
      <div className="d-flex justify-content-between  " >
        <strong>price ({cartProduct.length} items)</strong>
        <span>₹{totalPrice}</span>
      </div> <hr color="lightgray" />
      <div className="d-flex justify-content-between  " >
        <strong>Discount</strong>
        <span>₹555</span>
      </div> <hr color="lightgray" />
      <div className="d-flex justify-content-between  " >
        <strong>Delievery Charges</strong>
        <span><del>₹55 </del> free</span>
      </div> <hr color="lightgray" />
      <div className="d-flex justify-content-between  " >
        <strong>Secuired packaging</strong>
        <span>₹ 155</span>
      </div> <hr color="lightgray" />
      <div className="d-flex justify-content-between  " >
        <h4>Total Amount</h4>
        <span>₹{totalPrice-distcount}</span>
      </div> <hr color="lightgray" />
      <h5 className="text-success">you are saving ₹ 4598 on this </h5>
      <div>
        <button className="btn btn-primary">Place Order </button>
      </div>
    </section>
  );
};

export default Total;
