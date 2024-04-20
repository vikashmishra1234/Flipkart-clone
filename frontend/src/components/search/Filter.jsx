import React from 'react';
import '../products/style/style.scss'

const Filter = ({setCategory}) => {
    
    const handleClick = (category)=>{
        setCategory(category);

    }
  return (
    <aside className='aside-container'>
        <h5>Filters</h5>
        <section className='aside-category'>
            <span>CATEGORIES</span>
            <li>Mobile & Accessories</li>
            <li> <strong onClick={()=>handleClick('electronic')}  >Electronic</strong> </li>
            <li> <strong onClick={()=>handleClick('furniture')} >Furniture</strong> </li>
            <li> <strong onClick={()=>handleClick('sport')} >Sport</strong> </li>
            <li> <strong onClick={()=>handleClick('cloths')} >Cloths</strong> </li>
            <li> <strong onClick={()=>handleClick('grocery')} >Grocery</strong> </li>
            <li> <strong onClick={()=>handleClick('appliances')}  >Appliances</strong> </li>
            <li> <strong onClick={()=>handleClick('beauty')} >Beauty</strong> </li>
            <li> <strong onClick={()=>handleClick('books')}  >Books</strong> </li>
        </section>
        <section className='aside-price'>
                <span>Price</span>
                <div>
                <div className='slider-upper'></div>
                <div className='slider-upper1'></div>
                <div className='slider-upper2'></div>
                <div className='slider-input'>
                <input type="range" />
                <select name="min" id="min">
                    <option value="0">min</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="10000">10000</option>
                    <option value="20000">20000</option>
                </select>
                to
                <select name="min" id="min">
                    <option value="100">100</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="15000">15000</option>
                    <option value="30000+">30000+</option>
                </select>

                </div>

                </div>
        </section>
    </aside>
  )
}

export default Filter