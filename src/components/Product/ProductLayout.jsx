import React from 'react';
import './styles/productLayout.css'
import {WishlistContext,setWishlistContext,handleWishlistChangeContext} from '../../contexts/cartContext'
import { useContext,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function ProductLayout({product,color,setSearchParams}) {
  const handleWishlistChange = useContext(handleWishlistChangeContext)
  const pSize = Array.from(product.size)
  const [curHeaderImg,setCurHeaderImg] = useState(0)
  const [curSize,setCurSize] = useState(pSize[0])
  const [showsize,setShowsize] = useState(false)
  const sizes = [
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
  ]
  return (
    <div className='text-black mb-[1%] phone:flex phone:flex-row px-[3%] '>

         <div className='flex flex-col phone:hidden items-start justify-start '>
                    <label className='text-[150%] font-bold' htmlFor="">{product.name}</label>
                    <label className='flex flex-row justify-center items-center text-[180%]' htmlFor="">{product.price}$</label>
         </div>

         <div className='flex flex-row phone:block  py-[5%] phone:py-[2%] phone:w-[50%]'>
              <div className='flex flex-row w-full h-full phone:w-auto phone:h-auto'>
                    <div 
                    style={{backgroundImage:`url(${product.img[color].imgs[curHeaderImg]})`}}
                    className=' imgBack bg-gray2 pb-[100%] w-[60%] phone:w-[60%] phone:pb-[80%] '>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[40%] phone:w-[40%]  '>
                    {product.img[color].imgs.map((image,index)=>{
                            return(<button onClick={()=> setCurHeaderImg(index)} style={{backgroundImage:`url(${image})`}} className={` ${index === curHeaderImg ? 'border-black border-[1px]':''} pb-[70%] phone:pb-[50%] phone:w-[40%] bg-gray2 rounded-md w-[40%] mb-[3%] imgBack relative `} key={index}>
                                    </button>)
                    })}
                    </div>
             </div>
        </div>
        <div className='flex flex-col  phone:w-[50%] phone:py-[2%]'>
               
                <div className='phone:flex flex-col hidden justify-center items-start space-y-[2%] '>
                    <label className='text-[150%] font-bold' htmlFor="">{product.name}</label>
                    <label className='flex flex-row justify-center items-center text-[180%]' htmlFor="">{product.price}$</label>
                </div>

               <div className='text-[120%] mt-[5%] capitalize mb-[2%]'>
                  color:<span className=' ml-[1%] font-bold'>{product.img[color].name}</span>
               </div>

                <div className='flex flex-row justify-between'>
                    <div className='w-[80%] flex '> 
                        {product.img.map((i,index)=>{
                                return (
                                    <button onClick={()=>{
                                      setCurHeaderImg(0)
                                      setSearchParams({color:index})}} key={i.color} style={{backgroundImage:`url(${i.imgs[0]})`,backgroundColor:i.color}} className={` box-sizing:content-box pb-[15%] transition-all imgBack duration-200 w-[15%] rounded-md mr-[2%] ${ color===index ?'border-black':'border-gray3'} border-[1px] relative`}>
                                     </button>)
                        })}
                    </div>
                    <div className='w-[10%]'>
                        <button onClick={(index)=> handleWishlistChange(product.id)} className='flex w-full h-full items-center justify-end '>
                           <FontAwesomeIcon size="lg" icon={faHeart} />
                        </button>
                    </div>
                </div>


                <div className='flex flex-row mt-[5%] justify-between items-center w-full space-x-[5%]'>
 
                    <div className='w-[50%] relative border-black border-[1px] box-border text-[100%] py-[2%]'>
                            <button onClick={()=> setShowsize(s=> !s)} className=' relative w-full h-full  flex flex-row items-center justify-center   text-center'>
                                    <label className='mr-[2%]' htmlFor="">size</label>  
                                    <label className={`h-full ${showsize ? ' rotate-180':''} transition-all duration-200 text-center flex items-center justify-center`} htmlFor=""><ion-icon  name="chevron-down-outline"></ion-icon></label> 
                            </button>
                            <div className={` ${showsize ? '':'hidden'} absolute w-full flex flex-col items-center space-y-1 pt-[5%] z-10 bg-light2 border-[1px] border-t-0`}>
                                    {sizes.map(i=>{
                                        if(product.size.has(i)){
                                            return (
                                                <button  key={i} onClick={()=>{
                                                    setShowsize(s=> false)
                                                    setCurSize(i)}} className={`${curSize == i ? 'bg-black text-white':' bg-ligth2 text-black'}  pb-[20%] transition-all duration-200 w-[100%]   relative`}>
                                                    <div className=' absolute w-full h-full flex text-[110%]  items-center justify-center'>
                                                        {i}
                                                    </div>   
                                                </button>)
                                        }
                                        return
                                    })}
                            </div>
                    </div>

                    <button className='  border-black border-[1px] w-[50%] text-center text-[100%] py-[2%] text-black '>
                        Add to Cart
                    </button>

                </div>


                <div className='mt-[6%] mb-[5%] text-[120%]'>
                    simillar
                </div>
                <div className=' grid grid-cols-2 mb-[10%]  gap-[2%]'>
                        <div style={{backgroundImage:`url(${product.img[0].imgs[0]})`}} className='pb-[150%] imgBack'>
                        </div>
                        <div style={{backgroundImage:`url(${product.img[0].imgs[0]})`}} className='pb-[150%] imgBack'>
                        </div>
                        <div style={{backgroundImage:`url(${product.img[0].imgs[0]})`}} className='pb-[150%] imgBack'>
                        </div>
                        <div style={{backgroundImage:`url(${product.img[0].imgs[0]})`}} className='pb-[150%] imgBack'>
                        </div>
                </div>

        </div>


    </div>
    
  );
}

export default ProductLayout;
