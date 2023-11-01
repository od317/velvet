import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavLink } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/free-mode'
import './styles/main.css'
import { FreeMode} from 'swiper/modules'


function SecSlider() {
  const imgs = [
    {
      img:'https://n.nordstrommedia.com/it/3d00d615-705a-4bb4-b9e3-3853ebd4a55c.jpeg?h=750&w=750',
      name:'coats',
      to:'coat'
    },
    {
      img:'https://n.nordstrommedia.com/it/748c6910-fbd8-47e9-bb1b-5a4a4ae9def8.jpeg?h=750&w=750',
      name:'boots',
      to:'boot'
    },
    {
      img:'https://n.nordstrommedia.com/it/aa339e2a-cabe-456d-9ae9-bd8c66d2e643.jpeg?h=382&w=402',
      name:'jackets',
      to:'jacket'
    },
    
  ]
  return (<>
          <div className=' border-b-[1px] pb-[10%] border-dark2'>
            <Large imgs={imgs}></Large>
            <Small imgs={imgs}></Small>
          </div>
        </>
  )
}



const Large = ({imgs})=>{
  imgs = imgs.slice(0,3)
  return(<>
       <div className='hidden navmid:flex  flex-row mt-[5%]'>
             <div className='w-[25%] flex flex-col items-start pt-[5%] pl-[5%]'>
                    <label className='text-[150%] font-bold' htmlFor="">
                    Need Right <br /> Now
                    </label>
                    <label htmlFor="">
                    Your curated roundup of this season's essentials.
                    </label>
             </div>
             {imgs.map((i)=>{
                 return(
                    <NavLink to={`/store/${i.to}`} key={i.name} className='w-[24.5%] mx-[.5%]'>
                      <div style={{backgroundImage:`url(${i.img})`}} className=' imgBack w-full pb-[100%] '>
                      </div>
                      <div className='flex items-center justify-center text-center w-full' htmlFor="">
                            <label className='border-b-[1px] border-black' htmlFor="">{i.name}</label>    
                      </div>                          
                    </NavLink>
                 )
             })}
       </div>
  </>)
}

const Small = ({imgs})=>{
  return(<>
  <div className='navmid:hidden'>
      <div className=' flex flex-col mt-[10%] mb-[5%] '>
        <div className='flex flex-col px-[3%]'>
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
              <SwiperSlide key={i.name}>
                        <div style={{backgroundImage:`url(${i.img})`}} className=' relative w-full pb-[100%] imgBack'>
                          <NavLink className='w-full h-full absolute' to={'/store'}></NavLink>
                        </div>
                        <div className='px-[5%]'>
                          <label className='border-b-[1px]' htmlFor="">{i.name}</label>                          
                        </div>
              </SwiperSlide>
            )})}
            </Swiper>
        </div>    
  </>)
}

export default SecSlider
