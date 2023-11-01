import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSwiperSlide } from 'swiper/react'
import './styles/grid.css'
import { useSwiper } from 'swiper/react'
import { NavLink } from 'react-router-dom'


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

         <div className='flex flex-col mt-[10%] phone:mt-[5%]'>

              <div className='flex flex-col items-center text-center justify-center'>
                    <h1 className=' text-[110%] phone:text-[150%] font-semibold mb-[.2%]'>THE THREAD</h1>
                    <label className='mb-[1%] text-[90%] w-[95%] phone:w-full phone:text-[95%]' htmlFor="">Your go-to destination for all things fashion, beauty and lifestyle at Nordstrom.</label>
                    <NavLink className={'border-b-[1px]'} to={'/store'}>Get Inspired</NavLink>
              </div>
              <Large></Large>   
              <Small></Small>    
         </div>
     
{/*   
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
    </div> */}


    </>
  )
}

const Large = ()=>{
  const imgs = [
    'https://n.nordstrommedia.com/it/d3e253bb-291d-4e9a-854c-f6fd1cb5d486.jpeg?h=516&w=536',
    'https://clothedup.com/wp-content/uploads/2023/03/4881dff4-aa66-4942-b452-957be6ce7137-832x1024.jpeg',
    'https://n.nordstrommedia.com/id/0bf18794-a902-4510-ad8b-b128288d4cf2.jpeg?h=500&w=500',
  ]
  return(<>
  
        <div className=' hidden navmid:grid grid-cols-3 gap-x-[1%] mt-[3%] px-[2%]'>
             {imgs.map((i,index)=>{
                return(<>
                     <div className='flex flex-col'>
                          <div style={{backgroundImage:`url(${i})`}} className=' relative pb-[100%] imgback w-full bg-light2'>
                                <NavLink to='/store' className={'absolute w-full h-full'}></NavLink>
                          </div>
                          <label className='text-dark2 text-[120%] mb-[1%] font-semibold' htmlFor="">The Edit: Fall Accessories to Add to Your Wardrobe Now</label>
                          <NavLink className={'text-[90%] border-b-[1px] w-fit'} to='/store'>Shop Now</NavLink>
                    </div>    
                </>)
             })}
        </div>

  </>)
}


const Small = ()=>{
    const imgs = [
    'https://n.nordstrommedia.com/it/d3e253bb-291d-4e9a-854c-f6fd1cb5d486.jpeg?h=516&w=536',
    'https://clothedup.com/wp-content/uploads/2023/03/4881dff4-aa66-4942-b452-957be6ce7137-832x1024.jpeg',
    'https://n.nordstrommedia.com/it/d3e253bb-291d-4e9a-854c-f6fd1cb5d486.jpeg?h=516&w=536',
  ]
  return(<>
  <div className='navmid:hidden mt-[10%]'>
            <Swiper
            slidesPerView={1}
            className="mySwiper"
            >
            {imgs.map(i=>{
              return(
              <SwiperSlide key={i+Math.random()}>
                        <div style={{backgroundImage:`url(${i})`}} className=' relative w-full pb-[100%] imgBack'>
                          <NavLink className='w-full h-full absolute' to={'/store'}></NavLink>
                        </div>
                        <div className='px-[4%] flex flex-col'>
                        <label className='text-dark2 text-[110%] phone:text-[120%] w-[90%] mb-[1%] font-semibold' htmlFor="">The Edit: Fall Accessories to Add to Your Wardrobe Now</label>
                          <NavLink className={'text-[90%] border-b-[1px] w-fit'} to='/store'>Shop Now</NavLink>
                        </div>
              </SwiperSlide>
            )})}
            </Swiper>
        </div>    
  </>)
}


// const SwiperCard = ({card})=>{
//   const swiperSlide = useSwiperSlide()
//   return<>
//         <div className={`relative  ${swiperSlide.isActive  ? '':'' } pb-[150%]  bg-red-500 transition-all duration-200`} >
        
//          <div className={`absolute w-full h-full ${swiperSlide.isActive ? '':'p-[5%]'} transition-all duration-400`}>
//            <img loading="lazy" src="https://i.pinimg.com/736x/86/a6/1a/86a61a1ba2ad9a6e147f62b4cdee63ab.jpg"
//            className={`w-full h-full `} alt="" />
//             <div className='text-[90%] text-black  flex flex-col  items-center justify-center'>
//                     <div >shirt</div>
//                     <div >10.5$</div>
//             </div>
//          </div>
    
//         </div>

//   </>
// }

export default Grid