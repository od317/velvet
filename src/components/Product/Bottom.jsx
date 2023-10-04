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
    <div className='flex flex-col  mb-[5%]'>
        <label className=' font-bold text-[140%] px-[4%] mt-[5%] mb-[0%] text-dark2'>
            Discover More Items
        </label>
        <div className='px-[4%]'>
        <ProductsSlider products={product.simList}/>
        </div>
    </div>
  )
}
export default Bottom