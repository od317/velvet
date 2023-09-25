import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { NavLink } from 'react-router-dom'
import 'swiper/css' 
import 'swiper/css/effect-fade' 
import 'swiper/css/navigation'
import { useSwiper } from 'swiper/react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
function MainSlider() {
    const imgsl = [
        'https://n.nordstrommedia.com/it/eebd2371-223e-440e-9964-20fb7fc6c04f.jpeg?h=700&w=1608',
        'https://n.nordstrommedia.com/it/e5d46602-8d9b-4406-89e0-e2150299c03e.jpeg?h=700&w=1608',
        'https://n.nordstrommedia.com/it/30b9fb57-05b7-45f2-a7a0-824c102a7c9e.jpeg?h=700&w=1608'
    ]
    const imgss = [
      'https://n.nordstrommedia.com/it/aa4c4aeb-bf1b-432d-8077-38a14c46a614.jpeg?h=750&w=750',
      'https://n.nordstrommedia.com/it/f90ef97f-811b-4ed0-bbc8-03190c428d38.jpeg?h=750&w=750',
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
    <div className='hidden phone:block'>
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
    <div className='phone:hidden'>
        <Swiper
        effect={'fade'}
        modules={[EffectFade]}
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

    </>)
}


const SwiperCards = ({image})=>{
  const swiper = useSwiper()
  return(
  <> 
      <div className='flex flex-col'>
          <div className='pb-[100%] imgBack relative flex group' style={{backgroundImage: `url(${image})`}}>
               <button onClick={() => swiper.slideNext()} className='  absolute top-[45%] left-[2%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-back-outline"></ion-icon></button>
               <button onClick={() => swiper.slideNext()} className='  absolute top-[45%] left-[92%] z-10 text-[150%] hover:bg-dark2 hover:text-white flex items-center justify-center transition-all duration-200 h-[10%]'><ion-icon name="chevron-forward-outline"></ion-icon></button>

               <NavLink to="/store" className="w-full h-full  absolute">

               </NavLink>
          </div>
          <div className='flex flex-col px-[5%]'>
                    <label className='text-[140%] ' htmlFor="">Fall Escape</label>
                    <p htmlFor="">Get lost in a lush new season with picture-perfect outerwear, cozy knits and more</p>
                 
          </div>
      </div>


  </>)
}

export default MainSlider