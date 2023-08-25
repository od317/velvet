import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSwiperSlide } from 'swiper/react';

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
           
             <div style={{background:`url('https://media.gettyimages.com/id/1127827069/photo/flat-lay-of-menswear-with-personal-accessories.jpg?s=612x612&w=gi&k=20&c=l3wArOxgaSqAbjUHHskiPQEot858PAgQQO4kYwxExJ4=')`,backgroundSize:'cover',backgroundPosition:'center'}}
              className='bg-p1 pb-[80%] w-[100%] bg-cover bg-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
             </div>
           
             <div className='bg-p1 pb-[80%] bg-repeat w-[100%] bg-cover bg-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
             style={{backgroundRepeat:'no-repeat',background:`url('https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion-male-posing-street-background-sunglasses-outdoors-sunset_158538-20624.jpg?w=360')`,backgroundPosition:'center',backgroundSize:'cover'}}></div>
            
             <div className='bg-p1 pb-[40%] w-[100%]  row-span-2 bg-cover bg-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' 
              style={{background:`url('https://www.kosha.co/journal/wp-content/uploads/2022/06/casual-outfit-accessories.jpg')`,backgroundPosition:'center',backgroundSize:'cover'}}></div>
            
             <div className='bg-p1 pb-[40%] w-[100%] col-span-2 bg-cover bg-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'
             style={{backgroundPosition:'center',backgroundSize:'cover',background:`url('https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg')`}}></div>
                       
                               

        </div>
    </div>

 

    <div className=' relative pb-[100%] mt-[15%] w-full'>
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          className=" phone:hidden px-[20%]  absolute w-full h-full"
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
    </>
  )
}

const SwiperCard = ({card})=>{
  const swiperSlide = useSwiperSlide()
  return<>
        <div className={`relative flex items-center justify-center ${swiperSlide.isActive  ? '':'p-[5%]' } transition-all duration-200`} >
          <img src="https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg" alt="" />
          <div  className={`  text-black w-full h-full absolute flex items-center justify-center text-center z-10 translate-y-[-100%]`}>
          {card.num}
          </div>
        </div>
  </>
}

export default Grid