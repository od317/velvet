import React from 'react'
import { useContext,useState } from 'react'
import {WishlistContext,setWishlistContext,handleWishlistChangeContext} from '../../contexts/cartContext'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import './styles.css/storeGrid.css'
function StoreGrid({items}) {
  const wishlist = useContext(WishlistContext)
  const setWishlist = useContext(setWishlistContext)
  const handleWishlistChange = useContext(handleWishlistChangeContext)

  

  const checkInWishList = (id) => wishlist.has(id) ? true : false
  

  return (
   <>
      <div className=' grid grid-cols-2 gap-x-[2%] gap-y-[1%] phone:grid-cols-4 mt-[2%] phone:mt-[0%]  w-full  '>
            {items.map((v,i)=>{
              return(<div key={v.id}>
              <Card product={v} handleWishlistChange={handleWishlistChange} ></Card>
              </div>)
            })}
            
      </div>
  


  </>
  );
}


const Card = ({product,handleWishlistChange})=>{
      const [mainImgIndex,setMainImgIndex] = useState(0)
      return (<>
              <div className='w-[100%]'>
                    <div className=' relative'>
                              <div className=' absolute  z-[5] left-[75%] p-[5%] flex items-start justify-end'>
                                                <button  onClick={()=>handleWishlistChange(product.id)} className={`text-black`}>
                                                       <FontAwesomeIcon size="lg" icon={faHeart} />
                                                </button>
                              </div>
                    <Link className=' ' to={`/product/${product.id}?color=${mainImgIndex}`}>
                           <div style={{backgroundImage: `url(${product.img[mainImgIndex].imgs[0]})`}} className=' backimg bg-gray relative w-full pb-[150%] phone:pb-[150%]'>
                           </div>
                    </Link>
                    </div>
                    <div className='flex flex-col  px-[3%]   border-t-0 p-[2%] '>
                        <div className='  mt-[2%] mb-[2%] flex justify-center phone:justify-start phone:mb-[0%] phone:mt-[0%] '>
                              {product.img.map((b,bindex)=>
                              <button key={bindex}  onClick={()=>{
                                setMainImgIndex(bindex)
                                }}   
                                className={`mr-[2%] items-center relative ${ mainImgIndex === bindex ? '':'border-gray3'} border-[1px] justify-center pb-[15%] w-[15%] phone:pb-[10%] rounded-full phone:w-[10%]`}>
                                          <div
                                           style={{backgroundColor:b.color}} 
                                           className=' absolute rounded-full top-[5%] left-[5%] w-[90%] h-[90%]'></div>
                               </button>)}
                        </div>
                        <div className='flex flex-col text-center phone:flex-row items-center phone:text-start ponhe:items-start justify-between'>
                            <label className='text-[110%]' htmlFor="">{product.name}</label>
                        </div>
                        <div className='text-center phone:text-start '>{product.price}$</div>    
                  </div>

              </div>



             </>)      
}

export default StoreGrid
