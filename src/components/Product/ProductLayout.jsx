import React from 'react';
import './styles/productLayout.css'
import {WishlistContext,setWishlistContext,handleWishlistChangeContext} from '../../contexts/cartContext'
import { useContext,useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import RightSide from './RightSide'
import Middle from './Middle'
import LeftSide from './LeftSide';
import Bottom from './Bottom';

function ProductLayout({product,color,setSearchParams}) {
  const [curHeaderImg,setCurHeaderImg] = useState(0)
  return (
    <div className='px-[3%] phone:px-[2%]'>
            <div className='text-black mb-[1%] phone:py-[2%]  phone:flex phone:flex-row  '>

                <LeftSide product={product} color={color} curHeaderImg={curHeaderImg} setCurHeaderImg={setCurHeaderImg}/>

                {/* <div className='flex flex-col phone:px-[1%]  phone:w-[34%] '>
                    
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


                        <div className='flex flex-col mt-[5%] justify-between items-center w-full '>
        
                            <div className='w-[100%] relative  box-border text-[100%] py-[2%] phone:mb-[5%]'>
                                    <button onClick={()=> setShowsize(s=> !s)} className={` relative w-full h-full  py-[4%] rounded-sm border-black border-[1px] ${ showsize ? 'phone:border-b-0':''} flex flex-row justify-between px-[5%] items-center   text-center`}>
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

                            <label className='text-start w-full text-[#fc3003]' htmlFor=""> <span className=' font-bold'>107</span> people are viweing this</label>

                            <div className='flex flex-col mt-[2%] w-full'>
                                <div className='flex flex-row w-full'>
                                    <div className='w-[5%] '>
                                            <button   onClick={()=>{
                                                setDliveryIndex(0)
                                                }}   
                                                className={`mr-[2%] items-center relative ${ dliveryIndex === 0 ? '':'border-gray3'} border-[1px] justify-center pb-[15%] w-[15%] phone:pb-[100%] rounded-full phone:w-[100%]`}>
                                            </button>                             
                                    </div>
                                    <div className='w-[95%] flex flex-col'>
                                        <label className='font-bold text-[105%]' htmlFor="">
                                            Free Pickup at Store
                                        </label>
                                        <label className='text-[90%]' htmlFor="">
                                            Enter a Zip Code to see if it’s available for pickup.
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className=' w-[100%] phone:w-[100%] bg-dark2 flex flex-col rounded-sm text-white relative mt-[5%]  box-border text-[90%] py-[2%] phone:mb-[3%]'>
                                    <button  className={` relative w-full h-full  py-[2%]      ${ showsize ? 'phone:border-b-0':''} flex flex-row phone:justify-between phone:px-[5%] items-center justify-center   text-center`}>
                                            <label className='mr-[2%] text-[110%] flex items-center justify-center text-center w-full font-semibold' htmlFor="">
                                                <div className='flex flex-row justify-center items-center text-[120%] mr-[3%]'>
                                                <ion-icon name="bag"></ion-icon>
                                                </div>
                                                Add to cart
                                            </label>  
                                    </button>
                            </div>

                            <div className=' w-[100%] phone:w-[100%] border-dark2 border-[2px] text-dark2 flex flex-col rounded-sm text-white relative mt-[1%]  box-border text-[90%] py-[2%] phone:mb-[5%]'>
                                    <button  className={` relative w-full h-full  py-[2%]      ${ showsize ? 'phone:border-b-0':''} flex flex-row phone:justify-between phone:px-[5%] items-center justify-center   text-center`}>
                                            <label className='mr-[2%] text-[110%] flex items-center justify-center text-center w-full font-semibold' htmlFor="">
                                                <div className='flex flex-row justify-center items-center text-[120%] mr-[3%]'>
                                                <FontAwesomeIcon size="sm" icon={faHeart} />
                                                </div>
                                                Add To Wishlist
                                            </label>  
                                    </button>
                            </div>

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
                </div> */}
                <Middle product={product} curHeaderImg={curHeaderImg} setSearchParams={setSearchParams} color={color} setCurHeaderImg={setCurHeaderImg}/>

                <RightSide product={product}/>


            </div>
            <Bottom product={product} />
    </div>
  )
}

export default ProductLayout;
