import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { NavLink } from 'react-router-dom'
import 'swiper/css' 
import 'swiper/css/effect-fade' 
import 'swiper/css/navigation'
import { useSwiper } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
function MainSlider() {
    const imgs = [
        'https://n.nordstrommedia.com/it/eebd2371-223e-440e-9964-20fb7fc6c04f.jpeg?h=700&w=1608',
        'https://n.nordstrommedia.com/it/e5d46602-8d9b-4406-89e0-e2150299c03e.jpeg?h=700&w=1608',
        'https://n.nordstrommedia.com/it/30b9fb57-05b7-45f2-a7a0-824c102a7c9e.jpeg?h=700&w=1608'
    ]
  return (
    <Swiper
    effect={'fade'}
    modules={[EffectFade]}
    loop={true}
    className="mySwiper"
  >
    {imgs.map((i,index)=>{
        return(
        <SwiperSlide key={index}>
            <SwiperCard image={i}/>
        </SwiperSlide>
        )
    })}
  </Swiper>
  )
}

const SwiperCard = ({image})=>{
    const swiper = useSwiper()
    return(
    <>
            <div className='pb-[43%] imgBack relative flex group' style={{backgroundImage: `url(${image})`}}>
                 <button onClick={() => swiper.slideNext()} className=' opacity-0 group-hover:opacity-100 absolute top-[45%] left-[2%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-back-outline"></ion-icon></button>
                 <button onClick={() => swiper.slideNext()} className=' opacity-0 group-hover:opacity-100 absolute top-[45%] left-[96.5%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-forward-outline"></ion-icon></button>
                 <div className=' absolute w-[20%] h-[40%] left-[72%]   top-[40%] text-white'>
                    <label className='text-[170%] ' htmlFor="">Fall Escape</label>
                    <p htmlFor="">Get lost in a lush new season with picture-perfect outerwear, cozy knits and more</p>
                 </div>
                 <NavLink to="/store" className="w-full h-full  absolute">

                 </NavLink>
            </div>
             <button ></button>

    </>)
}

export default MainSlider