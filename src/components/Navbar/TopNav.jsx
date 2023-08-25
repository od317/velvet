import React from 'react'
import { useState } from 'react'
function TopNav() {
  const [searchBar,setSearchBar] = useState(false)
  const [searchq,setSearchq] = useState('')
  return (<>
    
    <div className=' hidden phone:flex flex-row bg-light1 text-white py-[1%] px-[10%]'>
      
        <div className=' w-[70%] '>
            <label htmlFor="" className='border-[1px] border-white p-[1%]'>
            VELVET WOMAN'S WEARS 
            </label>
        </div>

        <div className='w-[30%] flex text-[150%] items-center justify-end pr-[10%]'>
           
            <form onMouseOver={()=> setSearchBar(true)} onMouseLeave={()=> setSearchBar(false)} action="" className='mr-[10%] text-white flex flex-row items-center justify-center w-full'>
                <input onChange={(e)=>setSearchq(e.target.value)} className={`h-[1rem] text-[100%] py-[10%] outline-none border-b-[1px] border-white text-white bg-light1  ${(searchBar || searchq.length > 0) ? 'w-full' :'w-[0]'} transition-all duration-200`}></input>
                <button >
                   <ion-icon name="search"></ion-icon>
                </button>
            </form>
            <button className='text-[#f54242]'>
            <ion-icon name="heart"></ion-icon>
            </button>
        </div>

    </div>
    </>
  )
}

export default TopNav