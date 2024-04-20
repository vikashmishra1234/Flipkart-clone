import React, { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader } from "../../Loader/Loader";
import { getAddress } from "../GetAdress";

const Order = () => {
  const Navigate = useNavigate();
  const [address,setAdrress] = useState(null);
  const [loader,setLoader]  = useState(false)

 

  const getGeoLocation = async () => {
   setLoader(true);
     const data = await getAddress();
   console.log(data)
    setLoader(false);
    setAdrress(data.results[0].components)
    
  };

  const handleSubmit = (formData) => {
    // Handle the form data, for example, send it to the server
   
    Swal.fire({
      icon: "success",
      title: "Order Placed Successfully",
    });
    Navigate("/");
  };

  return (
    <div>
      {
        loader?<Loader/>:''
      }
      <h1>Delivery Address Form</h1>
      <AddressForm getLocation={getGeoLocation} address={address} onSubmit={handleSubmit} />
    </div>
  );
};

export default Order;
