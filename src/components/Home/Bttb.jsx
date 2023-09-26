import React from 'react'
import { useRef } from 'react'
import {useState,useEffect} from 'react'
function Bttb() {
  return (
    <>
    <Small></Small>
    <Large></Large>
    </>
  )
}

const Small = ()=>{
    const [show,setShow] = useState(false)
    useEffect(()=>{
        const handle = (e)=>{
            if(window.scrollY < 100){
                setShow(false)
            }
            else{
                setShow(true)
            }
        }
         window.addEventListener('scroll',handle)

        return()=>{
          window.removeEventListener('scroll',handle)
        }

    })

      const scroll = ()=>{
        window.scrollTo({top:'0',behavior:'smooth'})
      }

      return(<>
    
            { show &&
            <div className=' navmid:hidden z-20 w-[40%] left-[30%] fixed top-[10%]'>
                 <button className=' px-[8%] py-[5%] text-[115%] border-[1px] w-full bg-p1 border-gray shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg' onClick={()=>scroll()}>Back to Top</button>
            </div>}
    
      </>)
}

const Large = ()=>{
      return(<>
    
            <div className=''>

            </div>
    
      </>)
}

export default Bttb