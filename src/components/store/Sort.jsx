import React, { useState } from 'react'
import SFilters from './SFilters';
function Sort({handleSortChange,sort,numShow}) {



  return (
    <div className='p-[2%] relative  flex phone:flex  flex-row  justify-between items-center'>
          <div className=' hidden ms:block w-[40%]'>showing {numShow} of 100 items</div>
          <SFilters/>
          <LargeSort handleSortChange={handleSortChange} sort={sort}></LargeSort>
    </div>
  );
}


const LargeSort = ({handleSortChange,sort})=>{
  const [showSort,setShowSort] = useState(false)
  const handleClick = (value)=>{
    handleSortChange(value)
    setShowSort(false)
  }
  return (<>
               <div onMouseLeave={()=>{setShowSort(false)}} onMouseOver={()=>{setShowSort(true)}} className=' phone:relative z-[6] phone:w-[36%] ms:w-[22%]    text-start'>
                    <div  className=' phone:border-black  phone:border-[1px] phone:p-[2%] phone:px-[4%]  whitespace-nowrap flex flex-row justify-between items-center  px-[5%] cursor-pointer '>
                      <label className='cursor-pointer hidden phone:block ' htmlFor="">{sort}</label>
                      <label className='cursor-pointer phone:hidden ' htmlFor="">Show</label>
                      <label className={`${showSort ? ' rotate-180 ':''} flex items-center justify-center text-center transition-all duration-200`} htmlFor=""><ion-icon name="chevron-down-outline"></ion-icon></label>
                    </div>
                    <div className={`flex ${showSort ? '':'hidden'} bg-p1 flex-col text-start phone:border-t-0 phone:border-black phone:border-[1px]  w-full absolute`}>
                          <button onClick={()=>handleClick('recomended')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>recomended</button>
                          <button onClick={()=>handleClick('price low to high')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer  text-start px-[5%]'>price low to high</button>
                          <button onClick={()=>handleClick('price high to low')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>price high to low</button>
                          <button onClick={()=>handleClick('rate')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>rating</button>
                          <button onClick={()=>handleClick('date')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>date</button>
                    </div>
             </div>
  </>)
}

export default Sort
