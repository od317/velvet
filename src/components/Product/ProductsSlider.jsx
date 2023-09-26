import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSwiper } from 'swiper/react'
import { useSwiperSlide } from 'swiper/react'
import {m} from '../../Data/items'
import Card from '../store/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Small from '../Sliders/Small'
import Large from '../Sliders/Large'
function ProductsSlider({products}) {
 return (<>
       <Small items={products}></Small>
       <Large num={5} items={products}></Large>
    </>
   );
}

export default ProductsSlider;
