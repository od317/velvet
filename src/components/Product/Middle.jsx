import React from 'react';
import {SbContext,setSbContext,handleSbChangeContext} from '../../contexts/cartContext'
import { useContext,useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faStar } from '@fortawesome/free-regular-svg-icons'
import './styles/middle.css'
import Stars from './Stars'
import PriceDisplay from './PriceDisplay';
function Middle({product,color,setSearchParams,setCurHeaderImg}) {
  const handleSbChange = useContext(handleSbChangeContext)
  const sb = useContext(SbContext)
  const [dliveryIndex,setDliveryIndex] = useState(0)
  const [showsize,setShowsize] = useState(false)
  const pSize = Array.from(product.size)
  const [curSize,setCurSize] = useState(pSize[0])
  let curPrice = product.price
  if(product.dis){
    curPrice -= (product.price * product.dis /100)
  }
  const sizes =[
    'sm',
    'medium',
    'large',
    'xl',
    '2xl',
    '3xl',
  ]
  useEffect(()=>{
     setShowsize(false)
     setCurSize(pSize[0])
  },[product])
  return (
    <div className='flex flex-col navmid:px-[1%] m:w-[50%]  navmid:w-[34%] '>
                        
                <div className='navmid:flex flex-col pt-[1%] hidden justify-center items-start  '>
                        <Stars rate={product.rate}></Stars>
                    <label className='text-[140%] font-bold' htmlFor="">{product.name}</label>
                    <label className=' capitalize border-b-[1px] mb-[2%] border-b-gray' htmlFor="">{product.brand}</label>
                    <PriceDisplay price={product.price} dis={product.dis}></PriceDisplay>
                    <label className='' htmlFor="">{product.desc}</label>
                </div>

                

                <div className='text-[100%] mt-[5%] capitalize mb-[2%]'>
                    color:<span className=' ml-[1%] font-bold'>{product.img[color].name}</span>
                </div>

                <div className='  flex flex-row justify-between'>
                    <div className='w-[80%]  flex '> 
                        { product.img.map((i,index)=>{
                                return (
                                    <button onClick={()=>{
                                    setCurHeaderImg(0)
                                    setSearchParams({color:index},{replace:true})
                                    }
                                    } key={i.key} style={{backgroundImage:`url(${i.imgs[0]})`,backgroundColor:i.color}} className={` bx pb-[15%] phone:pb-[12%] phone:w-[12%] transition-all imgBack duration-200 w-[15%] rounded-md mr-[2%] ${ color==index ?'border-black':'border-gray3'} relative border-[1px]`}>
                                       {  color!=index ? <></>:(<ion-icon class=' z-10 hidden navmid:inline-block absolute rounded-full p-[2%] translate-x-[50%] translate-y-[-45%] bg-light1 text-white' name="checkmark-outline"></ion-icon>)}
                                    </button>)
                        })}
                    </div>

                </div>


                <div className='flex flex-col mt-[5%] justify-between items-center w-full '>

                    <div className='w-[100%] relative  box-border text-[100%] py-[2%] phone:mb-[5%]'>
                            <button onClick={()=> setShowsize(s=> !s)} className={` relative w-full h-full  py-[4%] rounded-sm border-black border-[1px] ${ showsize ? 'phone:border-b-light2':''} flex flex-row justify-between px-[5%] items-center   text-center`}>
                                    <label className='mr-[2%] cursor-pointer text-[110%] ' htmlFor="">size: {curSize}</label>  
                                    <label className={`h-full ${showsize ? ' rotate-180':''} transition-all duration-200 text-center flex items-center justify-center`} htmlFor=""><ion-icon  name="chevron-down-outline"></ion-icon></label> 
                            </button>
                            <div className={` ${showsize ? '':'hidden'} bg-p1 absolute w-full flex flex-col items-center space-y-1 pt-[5%] z-10  translate-y-[-1%] border-[1px] border-t-0`}>
                                    {sizes.map(i=>{
                                        if(product.size.has(i)){
                                            return (
                                                <button  key={i} onClick={()=>{
                                                    setShowsize(s=> false)
                                                    setCurSize(i)}} className={`${curSize == i ? 'bg-dark2 text-white':' bg-ligth2 text-black hover:bg-light2'}   pb-[20%] phone:pb-[12%] transition-all duration-200 w-[100%]   relative`}>
                                                    <div className=' absolute w-full h-full flex text-[110%]  items-center justify-center'>
                                                        {i}
                                                    </div>   
                                                </button>)
                                        }
                                        return
                                    })}
                            </div>
                    </div>

                    <label className='text-start w-full text-priceColor' htmlFor=""> <span className=' font-bold'>107</span> people are viweing this</label>

                    <div className='flex flex-col  w-full'>
                            {/* rounded bouttons */}
                            <div className='w-full flex mt-[10%] group mb-[5%] flex-col'>
                                <div className='w-full flex flex-row  items-center'>
                                    <div className='w-[5%] mr-[2%]'>
                                         <div className='w-[90%] pb-[90%] relative  border-black border-[1px] rounded-full'>
                                              <button className='w-[80%] pb-[80%] top-[16%] rounded-full left-[8%] bg-black absolute'></button>
                                         </div>
                                    </div>
                                    <label className='font-bold  text-[100%] w-[95%]' htmlFor="">
                                        Free Pickup at Store
                                    </label>
                                </div>
                                <div className='w-full flex flex-row '>
                                    <div className='w-[5%] mr-[2%] h-full flex items-center justify-center rounded-full  relative'>
                                         <button className='w-[80%] pb-[80%] rounded-full  absolute '></button>
                                    </div>
                                    <label className='text-[90%] w-[95%]' htmlFor="">
                                         Enter a Zip Code to see if it’s available for pickup.
                                    </label>
                                </div>

                            </div>
                            <div className='w-full my-[5%] flex flex-col'>
                                <div className='w-full flex flex-row  items-center'>
                                    <div className='w-[5%] mr-[2%]'>
                                         <div className='w-[90%] pb-[90%] relative  border-black border-[1px] rounded-full'>
                                              <button className='w-[80%] pb-[80%] top-[16%] rounded-full left-[8%] bg-black absolute'></button>
                                         </div>
                                    </div>
                                    <label className='font-bold  text-[100%] w-[95%]' htmlFor="">
                                        Free Pickup at Store
                                    </label>
                                </div>
                                <div className='w-full flex flex-row '>
                                    <div className='w-[5%] mr-[2%] h-full flex items-center justify-center rounded-full  relative'>
                                         <button className='w-[80%] pb-[80%] rounded-full  absolute '></button>
                                    </div>
                                    <label className='text-[90%] w-[95%]' htmlFor="">
                                         Enter a Zip Code to see if it’s available for pickup.
                                    </label>
                                </div>

                            </div>
                    </div>

                    <div className={` w-[100%] cursor-pointer navmid:w-[100%] bg-dark2 
                    ${(sb.has(`${product.id}-${color}-${curSize}-sb`) || sb.has(`${product.id}-${color}-${curSize}-sfl`)) ? 'bg-light1':'bg-dark2'}
                     flex flex-col rounded-sm text-white relative mt-[5%] transition-all duration-[400ms]  box-border text-[90%] py-[2%] phone:mb-[3%]`}>
                            <button onClick={()=>handleSbChange(`${product.id}-${color}-${curSize}`)} className={` relative w-full h-full  py-[2%]  cursor-pointer    ${ showsize ? 'phone:border-b-0':''} flex flex-row phone:justify-between phone:px-[5%] items-center justify-center   text-center`}>
                                    <label className='mr-[2%] text-[110%] cursor-pointer flex items-center justify-center text-center w-full font-semibold' htmlFor="">
                                        <div className='flex flex-row justify-center items-center text-[120%] mr-[3%]'>
                                        <ion-icon name="bag"></ion-icon>
                                        </div>
                                        { (sb.has(`${product.id}-${color}-${curSize}-sb`) || sb.has(`${product.id}-${color}-${curSize}-sfl`)) ? 'in Cart':'Add to cart'}
                                    </label>  
                            </button>
                    </div>

                    <div className=' w-[100%] cursor-pointer phone:w-[100%] border-dark2 border-[2px] hover:bg-light4 transition-all duration-200 flex flex-col rounded-sm text-dark2 relative mt-[1%]  box-border text-[90%] py-[2%] phone:mb-[5%]'>
                            <button  className={` relative w-full h-full  py-[2%]  cursor-pointer   ${ showsize ? 'phone:border-b-0':''} flex flex-row phone:justify-between phone:px-[5%] items-center justify-center   text-center`}>
                                    <label className='mr-[2%] text-[110%] cursor-pointer flex items-center justify-center text-center w-full font-semibold' htmlFor="">
                                        <div className='flex flex-row justify-center items-center text-[120%] mr-[3%]'>
                                        <FontAwesomeIcon size="sm" icon={faHeart} />
                                        </div>
                                        Add To Wishlist
                                    </label>  
                            </button>
                    </div>

                </div>


     </div>
  );
}




export default Middle;
