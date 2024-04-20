import axios from "axios";
import React, { useState } from "react";
import Electronices from "../category/Electronices";
import Offers from "../category/Offers";
import { addProduct } from "../Api/Services";
import { Loader } from "../Loader/Loader";

const AddProduct = () => {
  const [img, setImage] = useState([]);
  const [productDetails, setProduct] = useState({});

  const [loader,setLoader] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    productDetails.images = [img];
    setLoader(true)
   const response = await addProduct(productDetails);
   setLoader(false)
   
  };

  const handleChange = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "vikashmishra");
   
    await axios
      .post("https://api.cloudinary.com/v1_1/dwjh8zji6/image/upload", formData)
      .then((resp) => {
        
        
        img.push(resp.data.url);
        console.log(img)
      })
      .catch((err) => console.log(err));
  };
 


  return (
    <section>
      {
        loader?<div className="position-absolute p-3 text-center bg-dark text-light top-50 start-50" >
          <Loader/>
        </div>
        :''
      }
      <form onSubmit={handleSubmit} className="w-100">
        <div className="d-flex justify-content-around flex-wrap">
          <div>
            <h2>Product </h2>
            <div className="mb-3">
              
              <input
                onChange={(e) => {
                  setProduct({
                    ...productDetails,
                    [e.target.name]: e.target.value,
                  });
                }}
                required
                type="text"
                placeholder="e.g samsung m14"
                className="form-control"
                name="productName"
                id="product"
              />
            </div>
            <div className="mb-3">
              <select
                onChange={(e) => {
                  setProduct({
                    ...productDetails,
                    [e.target.name]: e.target.value,
                  });
                  ;
                }}
                required
                name="category"
                id="category"
              >
                <option value="furniture">furniture</option>
                <option value="electronic">electronic</option>
                <option value="beuty">beuty</option>
                <option value="grocery">grocery</option>
                <option value="appliances">home appliance</option>
                <option value="sport">sport</option>
              </select>
            </div>
            <div className="mb-3">
          
              <input
                name="color"
                onChange={(e) => {
                  setProduct({
                    ...productDetails,
                    [e.target.name]: e.target.value,
                  });
                }}
                type="text"
                placeholder="color of product"
                className="form-control"
                id="color"
              />
            </div>

            <div className="mb-3">
            
              <input
                type="file"
                required
                name="img1"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="files"
                className="form-control"
                id="image"
              />
            </div>
            <div className="mb-3">
             
              <input
                type="file"
                required
                name="img2"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="files"
                className="form-control"
                id="image2"
              />
            </div>
            <div className="mb-3">
            
              <input
                type="file"
                required
                name="img3"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="files"
                className="form-control"
                id="image3"
              />
            </div>
            <div className="mb-3">
          
          <input
            name="price"
            onChange={(e) => {
              setProduct({
                ...productDetails,
                [e.target.name]: e.target.value,
              });
            }}
            type="text"
            placeholder="actual price of the product"
            className="form-control"
            id="price"
          />
        </div>
        <div className="mb-3">
          
          <input
            name="discount"
            onChange={(e) => {
              setProduct({
                ...productDetails,
                [e.target.name]: e.target.value,
              });
            }}
            type="text"
            placeholder="discount on the product"
            className="form-control"
            id="discount"
          />
        </div>
          </div>
          <Electronices productDetails={productDetails} setProduct={setProduct}/>
          <Offers productDetails={productDetails} setProduct={setProduct}/>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
