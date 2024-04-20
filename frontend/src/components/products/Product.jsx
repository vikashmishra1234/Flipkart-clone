import React, { useEffect } from 'react'
import Electronices from './Electronices'
import Sponsor from '../sponsors/Sponsor'
import AllCategory from './AllCategory'
import Category from '../Category'
import Carousel from '../Carousel'

const Product = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <Category/>
      <Carousel/>
        <Electronices/>
        <Sponsor/>
        <AllCategory key={Math.random()} category={'appliances'} cat1={'appliances'} cat2={'appliances'} type={'Appliances For You'}/>
        <AllCategory key={Math.random()} category={'electronic'} cat1={'electronic'} cat2={'electronic'} type={'more from electronices'}/>
    </div>
  )
}

export default Product