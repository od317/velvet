import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavLink } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import './styles/main.css'
import { FreeMode} from 'swiper/modules'


function SecSlider() {
  const imgs = [
    'https://n.nordstrommedia.com/it/3d00d615-705a-4bb4-b9e3-3853ebd4a55c.jpeg?h=750&w=750',
    'https://n.nordstrommedia.com/it/3d00d615-705a-4bb4-b9e3-3853ebd4a55c.jpeg?h=750&w=750',
    'https://n.nordstrommedia.com/it/3d00d615-705a-4bb4-b9e3-3853ebd4a55c.jpeg?h=750&w=750',
    'https://n.nordstrommedia.com/it/3d00d615-705a-4bb4-b9e3-3853ebd4a55c.jpeg?h=750&w=750'
  ]
  return (<>
    <div className=' flex flex-col mt-[10%] mb-[5%]'>
        <div className='flex flex-col px-[5%]'>
             <label className=' font-semibold text-[110%]' htmlFor="">Need Right Now</label>
             <label className='text-[90%]' htmlFor="">Your curated roundup of this season's essentials.</label>
        </div>
    </div>
            <Swiper
            freeMode={true}
            modules={[FreeMode]}
            slidesPerView={1.2}
            spaceBetween={10}
            className="mySwiper"
            >
            {imgs.map(i=>{
              return(
              <SwiperSlide key={i+Math.random()}>
                        <div style={{backgroundImage:`url(${i})`}} className=' w-full pb-[100%] imgBack'>
                        </div>
                        <div className='px-[5%]'>
                          <label className='border-b-[1px]' htmlFor="">statement coats</label>                          
                        </div>
              </SwiperSlide>
            )})}
            </Swiper>
        </>
  )
}

const Card = ()=>{
  return(<>
        
        </>)
}

export default SecSlider
