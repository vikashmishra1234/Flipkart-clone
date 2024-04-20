import React from 'react';
import ac from './images/AcSponser.webp';
import iphone from './images/iPhoneSponsor.webp'
import img1 from './images/LaptopSponsor.webp'
import img2 from './images/lightSponsor.webp'
import img3 from './images/NothingSponsor.webp'
import img4 from './images/TravelSponsor.webp'
import '../../components/products/style/Product.scss'
import { useNavigate } from 'react-router-dom';


const Sponsor = () => {
  const Navigate = useNavigate();
  const handleClick = (category,cat)=>{
    Navigate(`/search/?category=${category}-7${cat}`)
  }
  return (
    <div className='d-flex flex-wrap sponsor-container '>
        <img onClick={()=>handleClick('appliances','appliances')} src={ac} alt="" />
        <img onClick={()=>handleClick('iphone','electronic')} src={iphone} alt="" />
        <img onClick={()=>handleClick('laptop','electronic')} src={img1} alt="" />
        <img onClick={()=>handleClick('appliances','appliances')} src={img2} alt="" />
        <img onClick={()=>handleClick('electronic','electronic')} src={img3} alt="" />
        <img onClick={()=>handleClick('appliances,appliances')} src={img4} alt="" />
    </div>
  )
}

export default Sponsor