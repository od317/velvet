import React from 'react'
import {Link} from 'react-router-dom'
import PriceDisplay from './PriceDisplay'
import Stars from './Stars'
import {m} from '../../Data/items'
function RightCard({id}) {
  const product = m[id]
  const dis = product.dis
  const price = product.price
  return (
    <div className='w-[100%] mb-[20%] transition-all duration-500'>
    <div className=' relative imgS'>

    <Link className=' outline-none ' to={`/product/${product.id}?color=${0}`}>
                          {
                          product.img[0].sm ? 
                          (<>
                         <div   style={{backgroundImage: `url(${product.img[0].sm})`}} className='imgBack relative bg-gray2 w-full pb-[150%] phone:pb-[150%]'>
                         </div>
                          </>):
                          (<>
                         <div   style={{backgroundImage: `url(${product.img[0].imgs[0]})`}} className='imgBack relative bg-gray2 w-full pb-[150%] phone:pb-[150%]'>
                         </div>
                          </>)
                         }
    </Link>
    </div>
    <div className='flex flex-col  px-[3%]   border-t-0 p-[2%] '>

        <div className='flex flex-col whitespace-normal text-center phone:flex-col items-center phone:text-center phone:items-start justify-between'>
            <label className=' ' htmlFor="">{product.brand}</label>
            {dis ? 
                (<>
                <div className='  text-[100%] w-full text-center text-priceColor'>
                    <span className='  font-semibold'>${price - (price*dis/100)}</span>
                </div>
                <label className=' text-[100%] w-full line-through' htmlFor="">${price}</label>
                </>) 
                : 
                (<label className='flex flex-row justify-center  items-center text-[100%] w-full' htmlFor="">${price}</label>)
           }
        </div>
  </div>

</div>


  )
}

export default RightCard