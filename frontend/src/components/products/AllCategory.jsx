import React, { useEffect, useState } from 'react'
import { getProductCategoryWise } from '../../Api/Services'
import { useNavigate } from 'react-router-dom';

const AllCategory = ({category,cat1,cat2,type}) => {
  const [products,setProducts] = useState([]);
  const Navigate = useNavigate()
    useEffect(()=>{
        const getData = async()=>{
        
            const res = await getProductCategoryWise(category);
            setProducts(res.products)
            console.log(res)
        }
        category&&category.length>0&&getData();
    },[category]);
    const handleClick = (category,cat)=>{
      Navigate(`/search/?category=${category}-7${cat}`)
    }
  return (
    <div>
        <h3 className='p-3'>{type}</h3>
        <div  className='d-flex flex-wrap gap-3 justify-content-evenly'>
          {
            products&&products.length>0&&products.map((product,ind)=>(
              
              <div key={ind} onClick={()=>handleClick(cat1,cat2)} style={{border:".6px solid lightgray",width:'218px',padding:'15px'}} className=' align-items-center d-flex flex-column  '>
                <img style={{height:'15vw'}}  src={product.images[0][ind%3]} alt="" />
                <div>{product.productName}</div>
              </div>
            ))
          }
          <div>

          </div>
        </div>
    </div>
  )
}

export default AllCategory