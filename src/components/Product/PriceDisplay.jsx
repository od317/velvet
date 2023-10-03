import React from 'react'

function PriceDisplay({price,dis=null}) {
  let o = 0
  if(dis){
    o = price - (price*dis/100)
    o = o.toFixed(2)
  }
  let display = dis ? 
  (
  <>
  <div className='  text-[110%]  text-priceColor'>
      <span className=' mr-[5%] font-semibold'>${o}</span>
      <span>({dis}%)</span>
  </div>
  <label className=' text-[110%] line-through' htmlFor="">${price}</label>
   </>) 
  : 
  (<label className='flex flex-row justify-center font-semibold items-center text-[110%]' htmlFor="">${price}</label>)
  return (
    <div className='flex flex-col'>
                    {display}
    </div>
  )
}

export default PriceDisplay