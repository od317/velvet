import React, { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faStar } from '@fortawesome/free-regular-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import Stars from './Stars'
import PriceDisplay from './PriceDisplay'
import ImageLoader from './ImageLoader'
function LeftSide({product,color,curHeaderImg,setCurHeaderImg}) {
  const [allshow,setAllShow] = useState(false)
  useEffect(() => {
      const imgcur = document.querySelector('.imgcur')
      const windowWidth = window.innerWidth / 2
      const windowHeight = window.innerHeight / 2
      imgcur.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX / windowWidth;
        const mouseY = e.clientY / windowHeight;
        imgcur.style.transform = `scale(2) translate3d(-${mouseX*50}%, -${mouseY*20}%, 0)`
      })
      imgcur.addEventListener('mouseleave',(e)=>{
        imgcur.style.transform = `translate3d(-${0}%, -${0}%, 0)`
      })
  },)
  return (
    <>
               <div className='flex flex-col navmid:hidden items-start justify-start '>
                    <label className='text-[150%] font-bold mb-[1%]' htmlFor="">{product.name}</label>
                         <Stars rate={product.rate}></Stars>
                         <PriceDisplay price={product.price} dis={product.dis}></PriceDisplay>
         </div>
        <div className='navmid:hidden mt-[5%]'>
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
                                     <ImageLoader allshow={allshow}  handleAllShow={setAllShow} img={i} />
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


        <div className='hidden navmid:grid mr-[2%]  gap-x-[.5%] gap-y-[1%] h-fit grid-cols-2 phone:w-[55%] navmid:w-[55%]'>
                    {  product.img[color].imgs.map((image,index)=>{
                            return(
                                  <div key={image} className='  overflow-hidden h-fit  relative'>
                                      <div  style={{backgroundImage:`url(${image})`}}
                                            className={`   h-fit  imgcur transition-all duration-0 hover:duration-[10ms] bg-gray2 w-full  imgBack  `} key={index}>          
                                            <img className='w-full opacity-0' src={image} alt="" />
                                      </div>
                                  </div>)
                    })}
        </div>
    </>
  );
}

export default LeftSide;
