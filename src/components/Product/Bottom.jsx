import React from 'react'
import Card from '../store/Card'
import {m} from '../../Data/items'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSwiper } from 'swiper/react'
import { useSwiperSlide } from 'swiper/react'
import ProductsSlider from './ProductsSlider'

function Bottom({product}) {


  return (
    <div className='flex flex-col mb-[5%]'>
        <label className=' font-bold text-[140%] mt-[5%] mb-[3%] text-dark2'>
            Discover More Items
        </label>
        
        <ProductsSlider products={product.simList}/>


        <div className='phone:hidden grid grid-cols-2 gap-x-[2%] gap-y-[1%]'>
             {product.simList.map((id,i)=>{
              const pro = m[id]
              return (
                              <Card key={i} product={pro}></Card>
              )
            })}
        </div>
    </div>
  );
}
export default Bottom