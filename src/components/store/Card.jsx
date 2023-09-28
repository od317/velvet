import React from 'react'
import { useContext,useState } from 'react'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import './styles.css/storeGrid.css'
import Stars from '../Product/Stars'
import PriceDisplay from '../Product/PriceDisplay'
const Card = ({product})=>{
    const [mainImgIndex,setMainImgIndex] = useState(0)
    return (<>
            <div className='w-[100%]  transition-all duration-500'>
                  <div className=' relative imgS'>

                  <Link className=' outline-none ' to={`/product/${product.id}?color=${mainImgIndex}`}>
                         <div style={{backgroundImage: `url(${product.img[mainImgIndex].imgs[0]})`}} className='imgBack relative w-full pb-[150%] phone:pb-[150%]'>
                         </div>
                  </Link>
                  </div>
                  <div className='flex flex-col  px-[3%]   border-t-0 p-[2%] '>
                     { product.img.length>1 && <div  className='  mt-[2%] mb-[2%] flex justify-center phone:justify-start phone:mb-[4%] phone:mt-[0%] '>
                            {product.img.map((b,bindex)=>
                            <button key={bindex}  onClick={()=>{
                              setMainImgIndex(bindex)
                              }}   
                              className={`mr-[2%] items-center relative ${ mainImgIndex === bindex ? '':'border-gray3'} border-[1px] br justify-center pb-[15%] w-[15%] phone:pb-[10%] rounded-full phone:w-[10%]`}>
                                        <div
                                         style={{backgroundColor:b.color}} 
                                         className=' absolute rounded-full  w-[100%] h-[100%]'></div>
                             </button>)}
                      </div>
                    }
                      <div className='flex flex-col whitespace-normal text-center phone:flex-col items-center phone:text-start phone:items-start justify-between'>
                          <label className=' font-semibold' htmlFor="">{product.brand}</label>
                          <label className='text-[90%] phone:my-[2%]' htmlFor="">{product.name}</label>
                          <PriceDisplay price={product.price} dis={product.dis}></PriceDisplay>
                          <Stars rate={product.rate}></Stars>
                      </div>
                </div>

            </div>



           </>)      
}

export default Card
