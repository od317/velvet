import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSwiperSlide } from 'swiper/react';
import './styles/grid.css'

const slideCards = [
  {
    img:'https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg',
    num:'1'
  },
  {
    img:'https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg',
    num:'2'
  },
  {
    img:'https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg',
    num:'3'
  },
  {
    img:'https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg',
    num:'4'
  },
  {
    img:'https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg',
    num:'5'
  },
  {
    img:'https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg',
    num:'6'
  },
    {
    img:'https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg',
    num:'7'
  },
]

function Grid() {


  return (<>
    <div className='w-full mt-[5%] px-[10%] hidden phone:block mb-[2rem]'>
        <div className=' w-full h-full grid gap-[2%] gap-x-[1%] grid-cols-3'>
           
             <div 
              className='bg-p1 pb-[70%] g1ImgBack relative w-[100%] bg-cover bg-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
             </div>
           
             <div className='bg-p1 pb-[70%] g2ImgBack bg-repeat w-[100%] bg-cover bg-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
             ></div>
            
             <div className='bg-p1 pb-[70%] g3ImgBack w-[100%]  row-span-2 bg-cover bg-center relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
             </div>
            
             <div className='bg-p1 pb-[45%] w-[100%] g4ImgBack col-span-2 bg-cover bg-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
             ></div>
                       
                               

        </div>
    </div>

 
    <div className='phone:hidden mt-[10%]'>
        <div className='flex flex-row mb-[5%] capitalize font-bold items-center justify-center'>
            unleash your style
        </div>
        <div className='  relative pb-[110%]  w-full'>
          
          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              className=" phone:hidden px-[22%]  absolute w-full h-full"
            >
              {slideCards.map(c=>{
                return <div key={c.num}>
                            <SwiperSlide key={c.num}>
                                <SwiperCard card={c}/>
                                
                              </SwiperSlide>
                              
                      </div>
              })}
                            
            </Swiper>
          </div>
        </div>


    </>
  )
}

const SwiperCard = ({card})=>{
  const swiperSlide = useSwiperSlide()
  return<>
        <div className={`relative  ${swiperSlide.isActive  ? '':'' } pb-[150%]  bg-red-500 transition-all duration-200`} >
        
         <div className={`absolute w-full h-full ${swiperSlide.isActive ? '':'p-[5%]'} transition-all duration-400`}>
           <img loading="lazy" src="https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg"
           className={`w-full h-full `} alt="" />
            <div className='text-[90%] text-black  flex flex-col  items-center justify-center'>
                    <div >shirt</div>
                    <div >10.5$</div>
            </div>
         </div>
    
        </div>

  </>
}

export default Grid