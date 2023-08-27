import React from 'react';
import './styles/gridcontent.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules'
import { useSwiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-creative'

const cards = [
    {
      className:'imgg1',
      text:'sweater'
    },    
    {
        className:'imgg2',
        text:'jacket'
    },    
    {
        className:'imgg3',
        text:'shirt'
    },    
    {
        className:'imgg4',
        text:'pants'
    },    
    {
        className:'imgg5',
        text:'coat'
    },    
    {
        className:'imgg6',
        text:'bags'
    },    
    {
        className:'imgg5',
        text:'sweater'
    },    
    {
        className:'imgg5',
        text:'sweater'
    },
]

function GridContent() {
  return (
    <div className='mt-[20%] phone:mb-[20%] mb-[50%] phone:mt-[10%]'>
     
      <div className=' grid phone:grid-cols-2 phone:gap-[3%] gap-[1%]  phone:px-[10%] '>
               
    
           {cards.map((c,i)=>{
            return <div className='relative pb-[70%]' key={i}>
                  <Card c={c}/>
            </div>
           })}         


      </div>

    </div>
  );
}

const Card = ({c})=>{
      return(<>
      <div  className={`absolute w-full h-full flex items-center justify-center ${c.className} `}>
                {c.text}
      </div> 
         </>)
}



export default GridContent;
