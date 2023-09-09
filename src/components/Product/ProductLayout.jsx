import React from 'react';
import './styles/productLayout.css'
import {WishlistContext,setWishlistContext,handleWishlistChangeContext} from '../../contexts/cartContext'
import { useContext,useState } from 'react';

function ProductLayout({product,color,setSearchParams}) {
  const handleWishlistChange = useContext(handleWishlistChangeContext)
  const pSize = Array.from(product.size)
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
    <div className='text-black mb-[1%]'>
         <div className='grid grid-cols-2'>
                {product.img[color].imgs.map((image,index)=>{
                         return(<div style={{backgroundImage:`url(${image})`}} className={`pb-[130%] ${index == 0 ?'row-span-2':''} mb-[3%] imgBack relative w-full`} key={index}>
                                     
                               </div>)
                })}


        </div>
        <div className='flex flex-col px-[3%]'>
               
                <div className='flex flex-row justify-between '>
                    <label className='text-[150%] font-bold' htmlFor="">{product.name}</label>
                    <label className='flex flex-row justify-center items-center text-[150%]' htmlFor="">{product.price}$</label>
                </div>

               <div className='text-[120%] mt-[5%] mb-[2%]'>
                  colors
               </div>

                <div className='flex flex-row justify-between'>
                    <div className='w-[80%] flex '> 
                        {product.img.map((i,index)=>{
                                return (
                                     <button onClick={()=>setSearchParams({color:index})} key={i.color} style={{backgroundImage:`url(${i.imgs[0]})`,backgroundColor:i.color}} className={` box-sizing:content-box pb-[15%] transition-all imgBack duration-200 w-[15%] rounded-md mr-[2%] border-black border-[1px] relative`}>
                                     </button>)
                        })}
                    </div>
                    <div className='w-[10%]'>
                        <button onClick={(index)=> handleWishlistChange(product.id)} className='flex w-full h-full items-center justify-end '>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                                <g transform="translate(0 -1028.4)">
                                  <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#e74c3c"/>
                                </g>
                            </svg>
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

                    <button className=' bg-light1 border-light1 border-[1px] w-[50%] text-center text-[100%] py-[2%] text-white '>
                        Add To Cart
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
