import React from 'react'
import { useState } from 'react'
function TopNav() {
  const [searchBar,setSearchBar] = useState(false)
  const [searchq,setSearchq] = useState('')
  return (<>
    
    <div className=' hidden phone:flex flex-row bg-p1 text-black pt-[1%] px-[10%]'>
      
        <div className=' w-[70%] '>

        </div>

        <div className='w-[30%] flex text-[150%] items-center justify-end pr-[10%]'>
           

        </div>

    </div>
    </>
  )
}

export default TopNav