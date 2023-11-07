import React from 'react'
import { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { m } from '../../Data/items'
import Card from '../store/Card'
import { useRef } from 'react'
import Small from '../Sliders/Small'
import Large from '../Sliders/Large'
function BottomContent({sim}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let c1 = []

  sim.map(s=>{
      c1 = [...c1,...m[s].simList.slice(0,10)]
  })
  c1 = Array.from(new Set(c1))
  useEffect(()=>{
    const handleWindowResize = ()=>{
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return ()=>{
    window.removeEventListener('resize',handleWindowResize)
    }
  })
  return (
    <>
      { c1.length>0 &&        
      <div className=' mt-[1%]  w-full mb-[5%]    phone:inline-block'>
              {windowWidth > 0 && <Small text={'you may  also like'} items={c1} />}
              <div className='mb-[1%] bg-p1 px-[4%]'>
              {windowWidth >= 0 && <Large text={'you may  also like'} num={4} items={c1} />}
              </div>
        </div>
      }

    </>
  )
}






export default BottomContent
