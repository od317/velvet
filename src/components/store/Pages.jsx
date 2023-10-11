import React from 'react';
import { useState } from 'react';

function Pages({page,handlePageChange,length}) {
  const pages = Math.ceil(length / 20)
  const lastpage = length%20
  let nums = new Array(pages)
  const [pdots,setPDots] = useState(false)
  const [adots,setADots] = useState(false)
  nums.fill(1)
  const check =(i)=>{
    let p = parseInt(page)
    if(i>1 && i<pages &&(i<=p-3 || i>=p+3)){
       return false
    }
    return true
  }
  return (
   <div className=' grid grid-rows-1 grid-flow-col gap-x-[5%] ms:gap-x-[3.5%] mb-[5%] w-full items-center justify-center'>
       {nums.map((m,i)=>{
        return(
          <div key={i}>
              { check(i+1) ? (<button onClick={()=>{handlePageChange(i+1)}} className={`rounded-full  px-[100%] 
               ${page==i+1 ? 'bg-light1':'bg-gray2'} transition-all duration-200 `}>
               {i+1}
               </button>):
               (<div>...</div>)}
          </div>
        )
       })}
    </div>
  )
}

export default Pages;
