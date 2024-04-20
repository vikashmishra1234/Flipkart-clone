import React from 'react'

const Category = ({display}) => {
  return (
    <section className='d-flex mt-2 text-muted flex-wrap shadow p-2 mb-2 bg-body rounded justify-content-evenly'>
        <div role='button' className='d-flex  pe-auto flex-column'><img style={{display:`${display&&'none'}`}} src="https://rukminim1.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100" alt="" />grocery</div>
        <div role='button' className='d-flex flex-column'><img style={{display:`${display&&'none'}`}} src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100" alt="" />Cloth</div>
        <div role='button' className='d-flex  flex-column'><img style={{display:`${display&&'none'}`}} src="https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100" alt="" />electronics</div>
        <div role='button' className='d-flex flex-column'><img style={{display:`${display&&'none'}`}} src="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100" alt="" />appliances</div>
        <div role='button' className='d-flex flex-column'><img style={{display:`${display&&'none'}`}} src="https://rukminim1.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100" alt="" />Traver</div>
        <div role='button' className='d-flex flex-column'><img style={{display:`${display&&'none'}`}} src="https://rukminim1.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100" alt="" />beauty,toys</div>
        <div role='button' className='d-flex flex-column'><img style={{display:`${display&&'none'}`}} height={'78px'} src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />furnitures</div>
    </section>
    
  )
}

export default Category