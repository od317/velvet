import React, { useState } from 'react'
import SFilters from './SFilters'
import './styles.css/scrollBar.css'

function Sort({handleSortChange,sort,numShow,totalNumShow}) {



  return (
    <div className='phone:p-[2%] relative  flex phone:flex  flex-row  justify-between items-center'>
          <div className=' hidden ms:block w-[40%]'>showing {numShow} of {totalNumShow} items</div>
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
               <div onMouseLeave={()=>{setShowSort(false)}} onMouseOver={()=>{setShowSort(true)}}  className=' hidden phone:block px-[5%] phone:px-[0] relative z-[6] phone:w-[33%] ms:w-[22%]    text-start'>
                    <div  className=' border-black   border-[1px] phone:p-[2%] phone:px-[4%]  whitespace-nowrap flex flex-row justify-between items-center   cursor-pointer '>
                      <label className='cursor-pointer  ' htmlFor="">Sort by: {sort}</label>
                      <label className='cursor-pointer phone:hidden ' htmlFor="">Show</label>
                      <label className={`${showSort ? ' rotate-180 ':''} flex items-center justify-center text-center transition-all duration-200`} htmlFor=""><ion-icon name="chevron-down-outline"></ion-icon></label>
                    </div>
                    <div className={`flex ${showSort ? 'max-h-screen  phone:border-black':'max-h-[0rem]  phone:border-p1 '} transition-all duration-300 tmaxh bg-p1 flex-col text-start border-t-0 border-[1px]  w-full absolute`}>
                          <div className='h-full overflow-hidden'>
                              <button onClick={()=>handleClick('featured')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>featured</button>
                          </div>
                          <div className='h-full overflow-hidden'>
                              <button onClick={()=>handleClick('price low to high')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer  text-start px-[5%]'>price low to high</button>
                          </div>
                          <div className='h-full overflow-hidden'>
                              <button onClick={()=>handleClick('price high to low')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>price high to low</button>
                          </div>
                          <div className='h-full overflow-hidden'>
                             <button onClick={()=>handleClick('rate')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>rating</button>
                          </div>
                          <div className='h-full overflow-hidden'>
                            <button onClick={()=>handleClick('date')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>date</button>
                          </div>
                    </div>
               </div>

               <div onMouseLeave={()=>{setShowSort(false)}} onMouseOver={()=>{setShowSort(true)}}  className=' phone:hiddne w-[40%] border-black   border-[1px] phone:px-[0] relative z-[6] phone:w-[33%] ms:w-[22%]    text-start'>
                    <div  className='  phone:p-[2%] phone:px-[4%]  whitespace-nowrap mx-[2%] flex flex-row justify-between items-center   cursor-pointer '>
                      <label className='cursor-pointer  ' htmlFor="">Sort by: {sort}</label>
                      <label className={`${showSort ? ' rotate-180 ':''} flex items-center justify-center text-center transition-all duration-200`} htmlFor=""><ion-icon name="chevron-down-outline"></ion-icon></label>
                    </div>
                    <div className={`flex ${showSort ? 'max-h-screen  phone:border-black':'max-h-[0rem]  phone:border-p1 '}  transition-all duration-300 tmaxh bg-p1 flex-col text-start border-t-0 border-[1px]  w-full absolute`}>
                          <div className='h-full overflow-hidden'>
                              <button onClick={()=>handleClick('featured')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>featured</button>
                          </div>
                          <div className='h-full overflow-hidden'>
                              <button onClick={()=>handleClick('price low to high')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer  text-start px-[5%]'>price low to high</button>
                          </div>
                          <div className='h-full overflow-hidden'>
                              <button onClick={()=>handleClick('price high to low')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>price high to low</button>
                          </div>
                          <div className='h-full overflow-hidden'>
                             <button onClick={()=>handleClick('rate')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>rating</button>
                          </div>
                          <div className='h-full overflow-hidden'>
                            <button onClick={()=>handleClick('date')} className='w-full hover:bg-light2 transition-all duration-100 cursor-pointer text-start px-[5%]'>date</button>
                          </div>
                    </div>
               </div>


  </>)
}

export default Sort
