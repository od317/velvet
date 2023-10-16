import React from 'react';
import { useState } from 'react';

function Pages({page,handlePageChange,length}) {
  const pages = Math.ceil(length / 20)
  if(page > pages){
    handlePageChange(1)
  } 
  const lastpage = length%20
  let nums = new Array(pages)
  nums.fill(1)
  const check =(i)=>{
    let p = parseInt(page)
    if((p == 1 && i == 2)||(p==pages&& i==pages-3)|| pages<6)
       return true

    if(i<p-2 || i >p)
       return false
    return true   
  }
  const handleClick = (i)=>{
    handlePageChange(i+1)
  }
  return (
    <>
      {      pages >1 &&    
      <div className='flex flex-row items-center mb-[5%] justify-between'>
        <button className=' disabled:text-gray3 flex flex-row justify-center items-center ' disabled={page<=1} onClick={()=>handleClick(page-2)}>
          <ion-icon class="flex items-center justify-center" name="chevron-back-outline"></ion-icon>
          prev</button>
        <div className=' flex flex-row  w-full items-center justify-center'>
                <div className='w-[10rem] flex justify-center mx-[.5%]'>     
                <button  onClick={()=>{handleClick(0)}} className={`rounded-full   pb-[15%] mr-[1%] h-fit flex justify-center   hover:bg-light4 transition-all duration-200  w-[15%]  relative  cursor-pointer
                            ${page==1 ? 'bg-gray2':''}   transition-all duration-200 `}>
                              <label htmlFor="" className=' cursor-pointer absolute'>{1}</label>
                </button>
                {page>3 && pages>=6 && <div className='w-[1rem]'>...</div>}
                    {nums.map((m,i)=>{
                      if(i!=0 && i!=pages-1 && check(i))
                      return(
                            <button key={i} onClick={()=>{handleClick(i)}} className={`rounded-full mr-[1%]  pb-[15%] h-fit flex justify-center  hover:bg-light4 transition-all duration-200  w-[15%]  relative  cursor-pointer
                            ${page==i+1 ? 'bg-gray2':''}   transition-all duration-200 `}>
                              <label htmlFor="" className=' cursor-pointer absolute'>{i+1}</label>
                            </button>
                      )
                    })}
                {page<pages-2 && pages>=6 &&  <div className='w-[1rem]'>...</div>}
                <button  onClick={()=>{handleClick(pages-1)}} className={`rounded-full  pb-[15%] h-fit flex justify-center  hover:bg-light4 transition-all duration-200  w-[15%]  relative  cursor-pointer
                            ${page==pages ? 'bg-gray2':''}   transition-all duration-200 `}>
                              <label htmlFor="" className=' cursor-pointer absolute'>{pages}</label>
                </button>
                </div>

        </div>
       <button className=' disabled:text-gray3 flex flex-row justify-center items-center ' disabled={page>=pages} onClick={()=>handleClick(page)}>next<ion-icon class="flex items-center justify-center" name="chevron-forward-outline"></ion-icon></button>
    </div> }
    </>     
  )
}

export default Pages
