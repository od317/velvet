import React from 'react'
import './styles/simdiv.css'
import { NavLink } from 'react-router-dom'
function SimDiv() {
  return (
    <NavLink to={'/store?sale=sale'}  className='navmid:flex flex-row my-[4%] bg-no-repeat hidden bgs items-center  justify-end w-full   mt-[2%] mb-[5%]'>
      <div className=' my-[1.5%]  w-[40%] cursor-pointer text-center phone:py-[2.7%] py-[3%]  text-black flex flex-row items-center justify-center '>
            <label className='  hidden ms:block cursor-pointer text-[90%]' htmlFor="">Save big on your favorite brands.</label>
            <label className=' box text-[95%]  cursor-pointer  ml-[1%] borderhover ' htmlFor="">Explore Sale</label>
      </div>
   </NavLink>
  )
}
export default SimDiv