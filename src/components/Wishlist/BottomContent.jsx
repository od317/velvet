import React from 'react'
import { useState,useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { m } from '../../Data/items'
import { FreeMode } from 'swiper/modules'
import Card from '../store/Card'
import { useRef } from 'react'


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
              {windowWidth >= 420 && <Large items={items} />}

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

const Large = ({items})=>{
  const [len,setLen] = useState(items.length-3)
  console.log(len)
  const [slidePer,setSlidePer] = useState(0)
  const nextButton = useRef(null)
  const PrevButton = useRef(null)
 
  const slideNext = ()=>{
    if(len<=0)
       return
        nextButton.current.disabled = true
        setTimeout(()=>{
            nextButton.current.disabled = false
        },500)
    setLen(l=>l-3)   
    setSlidePer(s=>s+75)
  }
  
  const slidePrev = ()=>{
    if(len===items.length-3)
       return
      PrevButton.current.disabled = true
      setTimeout(()=>{
           console.log('ok')
           PrevButton.current.disabled = false
      },500)  
    setLen(l=>l+3)
    setSlidePer(s=>s-75)
  }
  return(<>
  
        <div className=' flex flex-col w-full px-[4%] py-[2%] bg-p1'>
              <div className='text-[120%] font-semibold'>
                people viewed
              </div>

              <div className='flex justify-between mt-[5%]'>
                  
                  <div className='flex  items-center w-[3%]  justify-center'>
                       <button ref={PrevButton} disabled={len===items.length-3} onClick={()=>{slidePrev()}} className={`bg-black disabled:cursor-pointer transition-all duration-200 py-[50%] w-full text-white`}>n</button>
                  </div>
                  <div className='w-[94%] overflow-hidden'>
                      <div style={{transform:`translateX(-${slidePer}%)`}} className=' whitespace-nowrap  transition-all duration-[500ms]'>
                          {items.map((i,index)=>{
                          return(<div className='w-[25%] px-[1.5%] transition-all duration-300   text-[80%] inline-block' key={index+Math.random()}>
                                  <Card product={i}></Card>
                                </div>)
                          })}
                      </div>
                  </div>
                  <div className='flex  items-center w-[3%]  justify-center'>
                       <button ref={nextButton} disabled={len<=0} onClick={()=>{slideNext()}} className={`bg-black disabled:cursor-pointer py-[50%] w-full text-white`}>p</button>
                  </div>
              
              </div>

        </div>

  </>)
}


export default BottomContent
