import React, { useEffect, useState } from "react";
import "../products/style/style2.scss";
import { useNavigate } from "react-router-dom";
const Header = ({ setProducts, products, category,type }) => {
    const [sort,setSort] = useState('');
    const Navigate = useNavigate()
 
  useEffect(() => {
   
      if (sort === "low") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setProducts(sorted)
      } else if (sort === "high") {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setProducts(sorted)
      }
 
  }, [sort]);

  const handleClick = (id)=>{
      Navigate(`/checkout/?productId=${id+"-7"+type}`)
  }

  return (
    <div className="d-flex flex-column">
      <header className="product-header">
        <h4>
          {category}
          <small className="ms-2">
            (showing {products && products.length} out of{" "}
            {products && products.length} products)
          </small>
        </h4>
        <ul>
          {
            products &&
            products.length > 0 ?<> <span>sort by</span>
            <li>Popularity</li>
            <li onClick={() => setSort('low')}>Price--low to high</li>
            <li onClick={() =>setSort('high')}>Price--hight to low</li>
            <li>Newest First</li></>:''
          }
         
        </ul>
      </header>
      <main >
        {products &&
          products.length > 0 ?
          products.map((product) => (
            <>
              <div key={product._id} className="product-main" onClick={()=>handleClick(product._id)}>
                <section className="product-image">
                  <img src={product.images[0][0]} alt="" />
                </section>
                <section className="product-hightlight">
                  <h5>
                    {product.productName} ({product.color}){" "}
                  </h5>
                  <ul>
                    <li>
                      {product.highlight1} | {product.highlight3}
                    </li>
                    <li>{product.highlight2}</li>

                    <li>{product.highlight4}</li>
                    <li>{product.highlight5}</li>
                    <li>{product.highlight6}</li>
                  </ul>
                </section>
                <section className="product-price">
                  <div>
                    <h3>₹{product.price}</h3>
                  </div>
                  <div>
                    <del>₹{product.price + 4000}</del> {product.discount} off
                  </div>
                  <div>
                    <span>save extra with the offer</span>
                  </div>
                </section>
              </div>
            </>
          )): <div className="text-center">
            <h3> We Regrete ! Selected Product is not Available</h3>
          </div> }
      </main>
    </div>
  );
};

export default Header;
