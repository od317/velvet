import React from 'react'
import './styles/main.css'
import { NavLink } from 'react-router-dom'
function SimDiv() {
  return (
    <NavLink to={'/store?brand=Canada Goose'}
      className='flex flex-row  phone:px-[2%] mt-[5%] mb-[5%]'>
        <div  style={{backgroundImage:'url(https://static01.nyt.com/images/2020/04/23/fashion/22canadagoose-coats/22canadagoose-coats-articleLarge.jpg?quality=75&auto=webp&disable=upscale)'}} 
        className=' w-[60%]  phone:w-[50%] imgBack flex flex-row'>
        </div>
        <div className='  w-[40%] px-[.7%] phone:px-[0%] phone:w-[50%] text-center phone:py-[4%] py-[6%] bg-black text-white flex flex-col items-center justify-center '>
              <label className=' font-semibold text-[90%] phone:text-[115%]' htmlFor="">  Canada Goose </label>
              <label className='border-b-[1px] box border-white text-[90%] mt-[1%]' htmlFor="">Shop Now</label>

        </div>
    </NavLink>
  )
}
export default SimDiv