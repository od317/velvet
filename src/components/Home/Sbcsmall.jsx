import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavLink } from 'react-router-dom'
import 'swiper/css'
import { FreeMode} from 'swiper/modules'
import 'swiper/css/free-mode'
function Sbcsmall() {
  
    const items = [
        {
            name:'jackets',
            to:'jacket',
            img:'https://di2ponv0v5otw.cloudfront.net/posts/2023/10/18/652fe7398bb2e205654151af/m_wp_652fe751a0e6c6e9f62855ef.webp',
        },
        {
            name:'boots',
            to:'boot',
            img:'https://garne.com.ua/img/p/mid/960/4205960a.jpg'
        },
        {
            name:'coats',
            to:'coat',
            img:'https://m.media-amazon.com/images/I/615fhYcbPzL._AC_SX385_.jpg'
        },
        {
            name:'sneakers',
            to:'sneakers',
            img:'https://hips.hearstapps.com/hmg-prod/images/diane-batoukina-wears-blue-faded-denim-ripped-wide-legs-news-photo-1683392655.jpg?crop=0.668xw:1.00xh;0.202xw,0&resize=640:*'
        },
        {
            name:'sweatshirt',
            to:'sweatshirt',
            img:'https://media1.popsugar-assets.com/files/thumbor/OKsjISASQtzKRsN41IBSPBcqSAI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/09/29/241/n/44344577/f5279638e64c823b_hmgoepprod_26_/i/HM-Knit-Sweater.webp'
        }
    ]
    
  return (
    <div className='w-full navmid:hidden px-[2%] my-[2%]'>
    <div className="  flex flex-col items-center justify-center">
        <div className='flex flex-row w-full items-center justify-between'>
        <Swiper
            freeMode={true}  
            modules={[FreeMode]}
            slidesPerView={2.5}
            spaceBetween={10}
            className="mySwiper"
            >
            {items.map(i=>{
                return (
              <SwiperSlide key={i.name}>
                    <div className='w-full  last:mr-[0%] first:ml-[0%] flex flex-col' key={i.name}>
                        <NavLink to={'/store/'+i.to} style={{backgroundImage:`url(${i.img})`}}  className=' w-[100%] imgBack pb-[100%]'>
                        </NavLink>
                        <label className='w-full text-center font-semibold capitalize text-[120%] mt-[5%]' htmlFor="">{i.name}</label>
                    </div>
              </SwiperSlide>
                )
            })}
            </Swiper>
        </div>
    </div>    
</div> 
  )
}

export default Sbcsmall
