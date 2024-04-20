import React, { useEffect, useState } from "react";
import "./style/Product.scss";
import { getAllProducts } from "../../Api/Services";
import { useNavigate } from "react-router-dom";
const Electronices = () => {
  const [itemPerPage, setPerPage] = useState(5);
  const [startIndex, setStartIndex] = useState(0);
  const [arr, setArr] = useState([]);
const Navigate = useNavigate()
  useEffect(() => {
    const getProduct = async () => {
      const res = await getAllProducts();
      if (res.success) {
        setArr(res.Products);
      }
    };
    getProduct();
  }, []);

  const handleNext = () => {
    if (startIndex + itemPerPage < arr.length) {
      setStartIndex(startIndex + itemPerPage);
    }
  };
  const handlePrevious = () => {
    if (startIndex + itemPerPage >= 0) {
      setStartIndex(startIndex - itemPerPage);
    }
  };
  const handleProductCategoryWise = (productName,category)=>{
const query = productName+"-7"+category;
    Navigate(`/search/?category=${query}`);

  }
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div className="parant">
          <h3>Best Deals on the smart Devices</h3>
          <button
            className="btn btn-primary"
            disabled={startIndex === 0}
            onClick={handlePrevious}
          >
            prev
          </button>
          <button
            className="btn btn-primary"
            disabled={startIndex + itemPerPage >= arr.length}
            onClick={handleNext}
          >
            next
          </button>
          <div className="d-flex ">
            <div className="carousel-container ">
              {arr.length > 0 &&
                arr
                  .slice(startIndex, itemPerPage + startIndex)
                  .map((data, index) => (
                    
                  data.category==='electronic'&&<div key={index} onClick={()=>{handleProductCategoryWise(data.productName,data.category)}} className="d-flex flex-column img-container">
                        <img src={data.images[0][0]} alt="mg" />

                        <div>
                          <strong>{data.productName}</strong>
                        </div>
                      </div>
                   
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          style={{ height: "27vw", width: "14vw" }}
          src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/a20a7e5f5ffa9fd3.png?q=20"
          alt=""
        />
      </div>
    </div>
  );
};

export default Electronices;
