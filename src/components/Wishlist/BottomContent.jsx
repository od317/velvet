import React from 'react'
import { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { m } from '../../Data/items'
import { FreeMode } from 'swiper/modules'
import Card from '../store/Card'


function BottomContent({sim}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let items = []
  useEffect(()=>{
    const handleWindowResize = ()=>{
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return ()=>{
        window.removeEventListener('resize',handleWindowResize)
    }
  })
  sim.forEach(s=>{
    items = [...items,...m[s].simList]
  })
  items = items.map(i=>{
    return m[i]
  })
  return (
    <>
        <div className=' mt-[1%]  w-full mb-[5%]  phone:inline-block'>
              {windowWidth < 420 && <Small items={items} />}
              {windowWidth < 420 && <Small items={items} />}

        </div>
    </>
  )
}

const Small = ({items})=>{
      return(<>
        <div className=' px-[4%] py-[3%] mt-[5%] bg-p1'>
             <div className=' mb-[5%] font-semibold text-[110%]' htmlFor="">people also viewed</div>
            <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            freeMode={true}

            modules={[FreeMode]}
            className="mySwiper"
          >
            {items.map((i,index)=>{
              return(<div key={index+Math.random()}>
                    <SwiperSlide key={index+Math.random()}>
                      <Card product={i}></Card>
                    </SwiperSlide>
              </div>)
            })}
          </Swiper>
      </div>
      </>)
}

const Large = ()=>{

}


export default BottomContent
