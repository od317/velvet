import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { NavLink } from 'react-router-dom'
import 'swiper/css' 
import 'swiper/css/effect-fade' 
import 'swiper/css/navigation'
import { useSwiper } from 'swiper/react'
import { useEffect } from 'react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
function MainSlider() {
    const imgsl = [
        'https://n.nordstrommedia.com/it/9522ad57-48bc-4d87-a899-39c0449dacb3.jpeg?h=400&w=1608',
        'https://n.nordstrommedia.com/it/4460af7b-33ab-40a7-9fe6-c06f8d4f90e2.jpeg?h=400&w=1608'
    ]

  return (<>
    <div className='mb-[2%]'>
        <Lg imgs={imgsl}></Lg>
        <Sm imgs={imgsl}></Sm>
    </div>
    </>
  )
}

const Lg = ({imgs})=>{
  return(
    <div className='hidden navmid:block px-[2%]'>
        <Swiper
        effect={'fade'}
        modules={[EffectFade]}
        loop={true}
        className="mySwiper"
      >
        {imgs.map((i,index)=>{
            return(
            <SwiperSlide key={index}>
                <SwiperCardL image={i}/>
            </SwiperSlide>
            )
        })}
      </Swiper>
  </div>
  )
}

const Sm = ({imgs})=>{
  return(
    <div className='navmid:hidden'>
        <Swiper
        loop={true}
        className="mySwiper"
      >
        {imgs.map((i,index)=>{
            return(
            <SwiperSlide key={index}>
                <SwiperCards image={i}/>
            </SwiperSlide>
            )
        })}
      </Swiper>
  </div>
  )
}


const SwiperCardL = ({image})=>{
    const swiper = useSwiper()
    useEffect(()=>{
      const s =  setInterval(() => {
            swiper.slideNext()
      },2500)
      return()=>{
       clearInterval(s)
      }
   })
    return(
    <>
            <div className='pb-[25%] imgBack relative flex group' style={{backgroundImage: `url(${image})`}}>
                 <button onClick={() => swiper.slideNext()} className=' opacity-0 group-hover:opacity-100 absolute top-[45%] left-[2%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-back-outline"></ion-icon></button>
                 <button onClick={() => swiper.slideNext()} className=' opacity-0 group-hover:opacity-100 absolute top-[45%] left-[96.5%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-forward-outline"></ion-icon></button>
                 <div className=' absolute w-[20%] h-[40%] left-[10%]   top-[25%] text-black'>
                    <label className='text-[170%] mt-[2%] ' htmlFor="">Fall Escape</label>
                    <p htmlFor="">Get lost in a lush new season with picture-perfect outerwear, cozy knits and more</p>
                 </div>
                 <NavLink to="/store" className="w-full h-full  absolute">

                 </NavLink>
            </div>

    </>)
}


const SwiperCards = ({image})=>{
  const swiper = useSwiper()
  useEffect(()=>{
    const s =  setInterval(() => {
          swiper.slideNext()
    },2500)
    return()=>{
     clearInterval(s)
    }
 })
  return(
  <> 
      <div className='flex flex-col'>
          <div className='pb-[100%] imgBack relative flex group' style={{backgroundImage: `url(${image})`}}>
               <button onClick={() => swiper.slideNext()} className='  absolute top-[45%] left-[2%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-back-outline"></ion-icon></button>
               <button onClick={() => swiper.slideNext()} className='  absolute top-[45%] left-[92%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-forward-outline"></ion-icon></button>

               <NavLink to="/store" className="w-full h-full  absolute">

               </NavLink>
          </div>
          <div className='flex flex-col px-[3%]'>
                    <label className='text-[140%] ' htmlFor="">Fall Escape</label>
                    <p htmlFor="">Get lost in a lush new season with picture-perfect outerwear, cozy knits and more</p>
                 
          </div>
      </div>


  </>)
}

export default MainSlider