import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { filters } from '../../Data/FIlters'

function SFilters({handleClick}) {
  return (
    <>
                <div className="  w-[100%] mt-[2.5%] transition-all duration-200 ">
                    <Swiper
                    slidesPerView={3.5}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className=""
                    
                  >
                    {filters.map((filters,i)=>{
                    return(
                      <SwiperSlide key={filters.name}>
                          <button onClick={()=>{
                            handleClick(filters.name,true)
                            }} className=' navmid:hidden whitespace-normal relative w-full text-start text-black border-black border-[1px] mb-[6%]  py-[3%] px-[4%]  '>
                              <div className=' text-[105%] cursor-pointer  '>{filters.name}</div>
                          </button>
                      </SwiperSlide>

                     )
                    })}

                  </Swiper>

              </div>
    </>
  )
}

export default SFilters