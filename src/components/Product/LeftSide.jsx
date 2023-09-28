import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faStar } from '@fortawesome/free-regular-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import Stars from './Stars'
function LeftSide({product,color,curHeaderImg,setCurHeaderImg}) {
  return (
    <>
               <div className='flex flex-col phone:hidden items-start justify-start '>
                    <label className='text-[150%] font-bold mb-[1%]' htmlFor="">{product.name}</label>
                         <Stars rate={product.rate}></Stars>
                    <label className='flex flex-row justify-center items-center text-[150%]' htmlFor="">{product.price}$</label>
         </div>
        <div className='phone:hidden mt-[5%]'>
               <Swiper
                    slidesPerView={1.6}
                    spaceBetween={2}
                    freeMode={true}

                    modules={[FreeMode]}
                    className="mySwiper"
                    >
                    {product.img[color].imgs.map((i,index)=>{
                    return(<div key={i}>
                              <SwiperSlide key={i}>
                                <div
                                style={{backgroundImage:`url(${i})`}} 
                                className='h-full imgBack pb-[200%]'></div>
                              </SwiperSlide>
                    </div>)
                    })}
                    </Swiper>
          </div>
         {/* <div className='flex flex-row phone:hidden  py-[5%] phone:py-[2%] phone:w-[50%]'>
              <div className='flex flex-row w-full h-full phone:w-auto phone:h-auto'>
                    <div 
                    style={{backgroundImage:`url(${product.img[color].imgs[curHeaderImg]})`}}
                    className=' imgBack bg-gray2 pb-[100%] w-[60%] phone:w-[60%] phone:pb-[80%] '>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[40%] phone:w-[40%]  '>
                    { product.img[color].imgs.map((image,index)=>{
                            return(<button onClick={()=> setCurHeaderImg(index)} style={{backgroundImage:`url(${image})`}} className={` ${index === curHeaderImg ? ' border-black':' border-light2 '} transition-all duration-200 border-[1px] pb-[70%] bs phone:pb-[50%] phone:w-[40%] bg-gray2 rounded-md w-[40%] mb-[3%] imgBack relative `} key={index}>
                                    </button>)
                    })}
                    </div>
             </div>
        </div> */}


        <div className='hidden phone:grid mr-[2%] gap-x-[.5%] gap-y-[.5%] h-fit grid-cols-2 phone:w-[50%] ms:w-[55%]'>
                    {  product.img[color].imgs.map((image,index)=>{
                            return(<div  style={{backgroundImage:`url(${image})`}}
                                         className={`  pb-[150%] w-full  imgBack relative `} key={index}>          
                                  </div>)
                    })}
        </div>
    </>
  );
}

export default LeftSide;
