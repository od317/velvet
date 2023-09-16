import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faStar } from '@fortawesome/free-regular-svg-icons'
function LeftSide({product,color,curHeaderImg,setCurHeaderImg}) {
  return (
    <>
               <div className='flex flex-col phone:hidden items-start justify-start '>
                    <label className='text-[150%] font-bold mb-[1%]' htmlFor="">{product.name}</label>
                    <div className='flex flex-row'>
                         <FontAwesomeIcon className='' icon={faStar} style={{color: "#000000",}} />
                         <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />
                         <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />
                         <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />
                         <FontAwesomeIcon icon={faStar} style={{color: "#000000",}} />
                    </div>
                    <label className='flex flex-row justify-center items-center text-[180%]' htmlFor="">{product.price}$</label>
         </div>

         <div className='flex flex-row phone:hidden  py-[5%] phone:py-[2%] phone:w-[50%]'>
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
        </div>


        <div className='hidden phone:grid mr-[2%] gap-x-[.5%] gap-y-[.5%] grid-cols-2 w-[55%]'>
                    {  product.img[color].imgs.map((image,index)=>{
                            return(<div  style={{backgroundImage:`url(${image})`}}
                                         className={` pb-[150%] w-full  imgBack relative `} key={index}>
                                                   
                                  </div>)
                    })}
        </div>
    </>
  );
}

export default LeftSide;
