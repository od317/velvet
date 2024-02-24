import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { NavLink } from 'react-router-dom'
import 'swiper/css' 
import 'swiper/css/effect-fade' 
import 'swiper/css/navigation'
import { useSwiper } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { useEffect } from 'react'
function MainSlider() {
    const imgsl = [
        'https://n.nordstrommedia.com/it/eebd2371-223e-440e-9964-20fb7fc6c04f.jpeg?h=700&w=1608',
        'https://n.nordstrommedia.com/it/4485a854-4462-433d-98d6-2437a1c7c448.jpeg?h=700&w=1608',
        'https://n.nordstrommedia.com/it/30b9fb57-05b7-45f2-a7a0-824c102a7c9e.jpeg?h=700&w=1608'
    ]
    const imgss = [
      'https://n.nordstrommedia.com/it/aa4c4aeb-bf1b-432d-8077-38a14c46a614.jpeg?h=750&w=750',
      'https://n.nordstrommedia.com/it/3b4bb0b4-3003-40eb-80de-a771e0968c1d.jpeg?h=750&w=750',
      'https://n.nordstrommedia.com/it/79500d38-d305-4599-93a6-bc16d6355b93.jpeg?h=750&w=750'
    ]
  return (<>
    <Lg imgs={imgsl}></Lg>
    <Sm imgs={imgss}></Sm>
    </>
  )
}

const Lg = ({imgs})=>{
  return(
    <div className='hidden navmid:block'>
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
       },3000)
       return()=>{
        clearInterval(s)
       }
    })
    return(
    <>
            <div className='pb-[43%] imgBack relative flex group' style={{backgroundImage: `url(${image})`}}>
                 <button onClick={() => swiper.slidePrev()} className=' opacity-0 group-hover:opacity-100 absolute top-[45%] left-[2%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-back-outline"></ion-icon></button>
                 <button onClick={() => swiper.slideNext()} className=' opacity-0 group-hover:opacity-100 absolute top-[45%] left-[96.5%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-forward-outline"></ion-icon></button>
                 <div className=' absolute w-[20%] h-[40%] left-[72%]   top-[40%] text-white'>
                    <label className='text-[170%] ' htmlFor="">Fall Escape</label>
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
               <button onClick={() => swiper.slidePrev()} className='  absolute top-[45%] left-[2%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-back-outline"></ion-icon></button>
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