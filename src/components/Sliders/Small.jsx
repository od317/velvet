import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import Card from '../store/Card'
import { m } from '../../Data/items'
const Small = ({items,text})=>{
    let sim = []
    items.forEach(s=>{
        sim.push(m[s])
      })
    return(<>
      <div className=' navmid:hidden py-[3%] mt-[5%] px-[4%] bg-p1'>
            {text?(<div className=' mb-[5%] capitalize font-semibold text-[110%]' htmlFor="">{text}</div>):null}
          <Swiper
          slidesPerView={2.5}
          spaceBetween={15}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper "
        >
          {sim.map((i,index)=>{
            return(<div key={i.id+'s'}>
                  <SwiperSlide key={i.id+'s'}>
                    <Card product={i}></Card>
                  </SwiperSlide>
            </div>)
          })}
        </Swiper>
    </div>
    </>)
}
export default Small