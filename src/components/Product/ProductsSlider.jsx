import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSwiper } from 'swiper/react'
import { useSwiperSlide } from 'swiper/react'
import {m} from '../../Data/items'
import Card from '../store/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
function ProductsSlider({products}) {
    const [swiper, setSwiper] = React.useState(null)

    let swipeList  = []
    for(let i=0;i<products.length;i+=5){
       swipeList = [...swipeList,products.slice(i,i+5)]
    }
    const nexTo = ()=>{
      swiper.slideNext()
    }
  
    const prevTo = ()=>{
      swiper.slidePrev()
    }

  return (
    <div className=' hidden phone:flex flex-row items-center '>
            <button className=' text-[120%] hover:bg-dark2 h-fit px-[.3%] flex items-center justify-center py-[1%] hover:text-white transition-all duration-200' onClick={()=>prevTo()}>
            <FontAwesomeIcon icon={faChevronLeft}  />
            </button>
            <Swiper
            slidesPerView={1}
            className="w-full h-full"
            cssMode={true}
            onSwiper={(s)=>{
              setSwiper(s)
            }}
            >
            {swipeList.map((list,id)=>{
               return(
                <SwiperSlide key={id}>
                    <div className={` grid grid-cols-${swipeList[0].length} gap-x-[2%]`}>
                    {list.map((id,i)=>{
                        const pro = m[id]
                        return (
                                        <Card key={id} product={pro}></Card>
                        )
                    })}
                    </div> 
                </SwiperSlide> 
                    )
                    })}
                           
            </Swiper>
            <button className=' text-[120%] hover:bg-dark2 h-fit flex items-center justify-center py-[1%] px-[.3%] hover:text-white transition-all duration-200' onClick={()=>nexTo()}>
            <FontAwesomeIcon icon={faChevronRight}  />
            </button>
    </div>
  );
}

export default ProductsSlider;
