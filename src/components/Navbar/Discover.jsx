import React from 'react'
import { useState,useRef,useContext,useEffect } from 'react'
import {Routes,Route,NavLink, BrowserRouter, useLocation} from 'react-router-dom'

function Discover({showMore,setShowMore,setShowMoreMouseOver}) {
    const [dropDownImgNum,setDropDownImgNum] = useState(0)
  return (
    <div onMouseOver={()=>setShowMoreMouseOver(true)} onMouseLeave={()=>setShowMoreMouseOver(false)} className={`${showMore ? '  navmid:flex':'hidden'}  hidden  left-0 w-full absolute bg-p1 z-10  flex-row `} >
    <div className='flex flex-row w-[50%] p-[5%]'>
          <div onClick={()=> setShowMore(false)} className=" flex flex-col ">
            <label className=' font-bold text-[110%] ' htmlFor="">osama</label>
            <NavLink to={'/store'}>
                <label className=' cursor-pointer' onMouseLeave={()=> setDropDownImgNum(0)} onMouseOver={()=> setDropDownImgNum(1)} htmlFor="">T-shirt</label>
            </NavLink>
            <NavLink to={'/store'}>
                <label className=' cursor-pointer' onMouseLeave={()=> setDropDownImgNum(0)} onMouseOver={()=> setDropDownImgNum(2)} htmlFor="">shirt</label>
            </NavLink>
          </div>
    </div>

    <div className='flex flex-row w-[50%] h-full relative pb-[30%] '>

         <div className={` ${dropDownImgNum == 1 ? '':'hidden'} flex absolute w-full h-full justify-center items-center`}>
            <img className="w-[50%]" src="https://media.istockphoto.com/id/1286538907/photo/stylish-blonde-girl-wearing-black-t-shirt-and-glasses-posing-against-street-urban-clothing.jpg?s=612x612&w=0&k=20&c=4F9OrXj8iZa7V_7cmgQO3v3qYu_Ms8UiPayZXAin8z8=" alt="" />
         </div>

         <div className={` ${dropDownImgNum == 2 ? '':'hidden'} flex absolute w-full h-full justify-center items-center`}>
            <img className="w-[50%]" src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_23/1445782/white-t-shirts-today-main-190607-001.jpg" alt="" />
         </div>

    </div>
</div>
  )
}

export default Discover;
