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
    <div className='text-black mb-[1%] phone:py-[2%]  phone:flex phone:flex-row px-[3%] phone:px-[2%] '>

         <div className='flex flex-col phone:hidden items-start justify-start '>
                    <label className='text-[150%] font-bold' htmlFor="">{product.name}</label>
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

        <div className='flex flex-col   phone:w-[34%] '>
               
                <div className='phone:flex flex-col hidden justify-center items-start space-y-[2%] '>
                    <label className='text-[140%] font-bold' htmlFor="">{product.name}</label>
                    <label className=' capitalize' htmlFor="">{product.brand}</label>
                    <label className='flex flex-row justify-center items-center text-[120%]' htmlFor="">${product.price}</label>
                    <label className='' htmlFor="">{product.desc}</label>
                </div>

               <div className='text-[100%] mt-[5%] capitalize mb-[2%]'>
                  color:<span className=' ml-[1%] font-bold'>{product.img[color].name}</span>
               </div>

                <div className='flex flex-row justify-between'>
                    <div className='w-[80%] flex '> 
                        { product.img.map((i,index)=>{
                                return (
                                    <button onClick={()=>{
                                      setCurHeaderImg(0)
                                      setSearchParams({color:index})}} key={i.color} style={{backgroundImage:`url(${i.imgs[0]})`,backgroundColor:i.color}} className={` box-sizing:content-box pb-[15%] phone:pb-[12%] phone:w-[12%] transition-all imgBack duration-200 w-[15%] rounded-md mr-[2%] ${ color===index ?'border-black':'border-gray3'} border-[1px] relative`}>
                                     </button>)
                        })}
                    </div>
                    <div className='flex  items-center justify-end'>
                        <button onClick={(index)=> handleWishlistChange(product.id)} className=' '>
                           <FontAwesomeIcon size="lg" icon={faHeart} />
                        </button>
                    </div>
                </div>


                <div className='flex flex-row phone:flex-col mt-[5%] justify-between items-center w-full phone:space-x-[0%] space-x-[5%]'>
 
                    <div className=' w-[50%] phone:w-[100%] relative  box-border text-[100%] py-[2%] phone:mb-[5%]'>
                            <button onClick={()=> setShowsize(s=> !s)} className={` relative w-full h-full  py-[4%] rounded-sm border-black border-[1px] ${ showsize ? 'phone:border-b-0':''} flex flex-row phone:justify-between phone:px-[5%] items-center justify-center   text-center`}>
                                    <label className='mr-[2%] text-[110%]' htmlFor="">size</label>  
                                    <label className={`h-full ${showsize ? ' rotate-180':''} transition-all duration-200 text-center flex items-center justify-center`} htmlFor=""><ion-icon  name="chevron-down-outline"></ion-icon></label> 
                            </button>
                            <div className={` ${showsize ? '':'hidden'} absolute w-full flex flex-col items-center space-y-1 pt-[5%] z-10 bg-light2 translate-y-[-1%] border-[1px] border-t-0`}>
                                    {sizes.map(i=>{
                                        if(product.size.has(i)){
                                            return (
                                                <button  key={i} onClick={()=>{
                                                    setShowsize(s=> false)
                                                    setCurSize(i)}} className={`${curSize == i ? 'bg-black text-white':' bg-ligth2 text-black'}  pb-[20%] phone:pb-[12%] transition-all duration-200 w-[100%]   relative`}>
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

                <div className='phone:hidden'>
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

        <div className='hidden phone:grid  h-fit pl-[2%] w-[11%] grid-cols-1'>
                <div className=' font-semibold mb-[10%] text-center'>
                  You Might Also Like
                </div>
                {product.img[color].imgs.map((image,index)=>{
                    return(<div className=' w-full h-fit mb-[35%]'>
                                <div 
                                style={{backgroundImage:`url(${image})`}}
                                className='w-full pb-[150%] imgBack'>
                                </div>
                                <div className='grid grid-cols-1 text-center text-[90%]'>
                                       <label htmlFor="">{product.brand}</label>
                                       <label className=' font-semibold' htmlFor="">${product.price}</label>
                                </div>
                          </div>)
                })}
        </div>

    </div>
    
  )
}

export default ProductLayout;
