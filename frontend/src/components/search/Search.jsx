import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getProductCategoryWise } from '../../Api/Services';
import Category from '../Category';
import Filter from './Filter';
import Header from './Header';
import { Loader } from '../../Loader/Loader';

const Search = () => {
    const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('category');
 



  const [Products,setProducts ] = useState([]);
  const [loader,setLoader] = useState(false)
  const [arr,setArr] = useState([])
  const [category,setCategory] = useState()
  const [type,setType] = useState();

  useEffect(()=>{
    const arr1 = query.split("-7")
    setArr(arr1);
    setType(arr1[1]);
    setCategory(arr1[0])
 
  },[query])
  
  useEffect(()=>{
    
        const getData = async()=>{
       
          setLoader(true)
          const products =  await getProductCategoryWise(category);
          setLoader(false)
          setProducts(products.products)
        
        }
        category&&category.length>0&&getData();
  },[category,type])
  return (
    <>
    {
      loader?<Loader/>:''
    }
    <Category display={'none'}/>
    <section className='d-flex gap-3'>
      <Filter setCategory={setCategory}/>
    <Header type={type} setProducts={setProducts} category={category} products={Products}/>
    </section>
    </>
  )
}

export default Search