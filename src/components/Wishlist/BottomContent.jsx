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
        <div className=' mt-[1%]  w-full mb-[5%]   phone:inline-block'>
              {windowWidth < 420 && <Small text={'people also viewed'} items={sim} />}
              {windowWidth < 420 && <Small text={'people also viewed'} items={sim} />}
              <div className='mb-[1%]'>
                 {windowWidth >= 420 && <Large text={'people also viewed'} num={4} items={sim} />}
              </div>
              <div className='mb-[1%]'>
                 {windowWidth >= 420 && <Large text={'people also viewed'} num={4} items={sim} />}
              </div>
        </div>
    </>
  )
}






export default BottomContent
