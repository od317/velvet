import React from 'react';
import './styles/gridcontent.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative } from 'swiper/modules'
import { useSwiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-creative'
import Small from '../Sliders/Small';

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
const ids = ['t1','t2','t3','t4','t5','t1','t2','t3','t4','t5','t1','t2','t3','t4','t5']
function GridContent() {
  return (<>
    <Small text={'Great Deals on What You Love'} items={ids} />
    <div className='mt-[20%] phone:mb-[20%] mb-[50%] phone:mt-[10%]'>
     
      <div className=' grid phone:grid-cols-2 phone:gap-[3%] gap-[1%]  phone:px-[10%] '>
               
    
           {cards.map((c,i)=>{
            return <div className='relative pb-[70%]' key={i}>
                  <Card c={c}/>
            </div>
           })}         


      </div>

    </div>
    </>
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
