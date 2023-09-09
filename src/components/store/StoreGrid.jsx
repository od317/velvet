import React from 'react'
import { useContext,useState } from 'react'
import {WishlistContext,setWishlistContext,handleWishlistChangeContext} from '../../contexts/cartContext'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
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
              <Card product={v}></Card>
              </div>)
            })}
            
      </div>
  


  </>
  );
}


const Card = ({product})=>{
      const [mainImgIndex,setMainImgIndex] = useState(0)
      return (<>
              <div className='w-[100%]'>
                    <div className=''>
                    <Link className=' ' to={`/product/${product.id}?color=${mainImgIndex}`}>
                           <div style={{backgroundImage: `url(${product.img[mainImgIndex].imgs[0]})`}} className=' backimg bg-gray relative w-full pb-[150%] phone:pb-[150%]'>
                           </div>
                    </Link>
                    </div>
                    <div className='flex flex-col pt-[6%] px-[3%] border-[2px]  border-t-0 p-[2%] border-gray2'>
                        <div className='flex space-x-[5%] flex-row'>
                              {product.img.map((b,bindex)=>
                              <button key={bindex}  onClick={()=>{
                                setMainImgIndex(bindex)
                                }}  
                                style={{backgroundColor:b.color}} 
                                className='flex flex-row items-center justify-center  pb-[10%] rounded-full w-[10%]'>
                               </button>)}
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <label className='text-[110%]' htmlFor="">{product.name}</label>
                            <button onClick={()=>handleWishlistChange(product.id)} className={`text-[#f54242]`}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                                <g transform="translate(0 -1028.4)">
                                  <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#e74c3c"/>
                                </g>
                            </svg>
                            </button>
                        </div>
                        <div>{product.price}$</div>    
                  </div>
              </div>
             </>)      
}

export default StoreGrid
