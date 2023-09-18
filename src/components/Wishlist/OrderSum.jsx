import React from 'react'
import {m} from '../../Data/items'

function OrderSum({items}) {
  let total = 0
  items.forEach(i => {
    let cur = i.split('-')
    total += parseFloat(m[cur[0]].price)
  })
  return (
    <div className='px-[4%] flex flex-col pt-[2%]  my-[5%] bg-p1 py-[5%]'>
         <label className=' font-bold text-[120%] my-[3%]' htmlFor="">Order summary</label> 
         <div className='flex flex-row justify-between items-center pb-[3%] border-b-gray3 border-b-[1px]'>
              <label htmlFor="">Subtotal</label>
              <label htmlFor="">${total}</label>
         </div>
         <button className='bg-black text-white py-[4%] font-semibold mt-[5%] mb-[5%]'>Check Out</button>
         <label className='w-full text-center' htmlFor="">International Shipping</label>
    </div>
  );
}

export default OrderSum;
