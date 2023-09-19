import React from 'react'
import {m} from '../../Data/items'

function OrderSum({items}) {
  let total = 0
  items.forEach(i => {
    let cur = i.split('-')
    total += parseFloat(m[cur[0]].price)
  })
  return (
    <div className='px-[4%] phone:px-[1.5%] phone:pt-[1%] phone:float-right phone:w-[32%] phone:mb-[2%] flex flex-col pt-[2%] phone:my-[0%]  my-[5%] bg-p1 phone:py-[3%] py-[5%]'>
         <label className=' font-bold text-[120%] my-[3%] phone:text-[135%] text-black' htmlFor="">Order summary</label> 
         <div className='pb-[3%] border-b-gray3 border-b-[1px] flex flex-col'>
              <div className='flex flex-row justify-between items-center phone:text-[110%] mb-[5%]'>
                    <label htmlFor="">Subtotal</label>
                    <label htmlFor="">${total}</label>
              </div>
              <div className='hidden phone:flex flex-row justify-between items-center mb-[5%]'>
                    <label htmlFor="">Shiping</label>
                    <label htmlFor="">Free</label>
              </div>
              <div className='hidden phone:flex flex-row justify-between items-center mb-[5%]'>
                    <label htmlFor="">Estimated tax</label>
                    <label htmlFor="">$18.45</label>
              </div>
         </div>
         <div className='hidden phone:flex flex-row justify-between items-center text-[128%] my-[5%]'>
                    <label htmlFor="">Estimated total</label>
                    <label htmlFor="">$198.44</label>
              </div>
         <button className='bg-black text-white py-[3.5%] font-semibold mt-[5%] mb-[5%]'>Check Out</button>
         <label className='w-full text-center' htmlFor="">International Shipping</label>
    </div>
  );
}

export default OrderSum;
