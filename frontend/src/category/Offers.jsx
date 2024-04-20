import React from "react";

const Offers = ({setProduct,productDetails}) => {
  return (
    <div>
      <h2>Available Offers</h2>
      <div className="mb-3">
        <input 
        name="offer1"
        onChange={(e)=>{setProduct({...productDetails,[e.target.name]:e.target.value})}}
          className="form-control"
          type="text"
          placeholder="Offer 1"
        />
      </div>
      <div className="mb-3">
        <input 
        name="offer2"
        onChange={(e)=>{setProduct({...productDetails,[e.target.name]:e.target.value})}}
          className="form-control"
          type="text"
          placeholder="Offer 2"
        />
      </div>
      <div className="mb-3">
        <input 
        name="offer3"
        onChange={(e)=>{setProduct({...productDetails,[e.target.name]:e.target.value})}}
          className="form-control"
          type="text"
          placeholder="Offer 3"
        />
      </div>
      <div className="mb-3">
        <input
        name="offer4" 
        onChange={(e)=>{setProduct({...productDetails,[e.target.name]:e.target.value})}}
          className="form-control"
          type="text"
          placeholder="Offer 4"
        />
      </div>
      
    </div>
  );
};

export default Offers;
