import React from 'react'
import { useRef } from 'react'
import {useState,useEffect} from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    
            <div className={` ${show? '':' translate-y-[-500%] '} transition-all duration-[300ms] navmid:hidden z-20 w-[35%] left-[31.5%] fixed top-[10%]`}>
                 <button  className={`  px-[8%] py-[5%] text-[105%]  w-full bg-p1  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded-full`} onClick={()=>scroll()}>Back to Top</button>
            </div>
    
      </>)
}

const Large = ()=>{
    const [show,setShow] = useState(false)
    useEffect(()=>{
        const handle = (e)=>{
            if(window.scrollY < 300){
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
            <div className='hidden navmid:block z-20 w-[4%] opacity-75 top-[90%] left-[95%] fixed '>
                 <button className=' flex flex-col text-[90%] items-center justify-center py-[8%]  border-[1px] w-full bg-p1 border-gray shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ' onClick={()=>scroll()}>
                        <FontAwesomeIcon icon={faArrowUp} style={{color: "#000000",}} />
                        Top
                </button>
            </div>}
    
      </>)
}

export default Bttb