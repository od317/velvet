import React from 'react'
import { useContext,useState } from 'react'
import {WishlistContext,setWishlistContext} from '../../contexts/cartContext'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import './styles.css/storeGrid.css'
function StoreGrid({items}) {
  const wishlist = useContext(WishlistContext)
  const setWishlist = useContext(setWishlistContext)
  const [wishliseIds,setWishlistIds] = useState(new Set(wishlist))

  const editWishList = (id)=>{        
    if(wishliseIds.has(id)){
           let nextWishList = wishlist.filter(i => i !== id)
           setWishlistIds(prev=> new Set([...prev].filter(i=> i !== id)))
           setWishlist(nextWishList)
           localStorage.setItem('wishlist',JSON.stringify(nextWishList))

           return 
          }
    let nextWishList = [...wishlist,id]
    setWishlistIds(prev=> new Set([...prev,id]))      
    setWishlist(nextWishList)
    localStorage.setItem('wishlist',JSON.stringify(nextWishList))

  }

  const checkInWishList = (id) => wishliseIds.has(id) ? true : false
  

  return (
   <>
      <div className=' grid grid-cols-2 gap-x-[2%] gap-y-[1%] phone:grid-cols-3 mt-[2%] phone:mt-[0%]  w-full  '>
            {items.map((v,i)=>{
              return(<div key={i}>
              <div className='w-[100%]'>
                    <div className='mb-[5%]'>
                    <Link className=' ' to={`/product/${v.id}`}>
                           <div style={{backgroundImage: `url(${v.img})`}} className=' backimg bg-gray relative w-full pb-[150%] phone:pb-[120%]'>
                           </div>
                    </Link>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row items-center justify-between'>
                            <label className='' htmlFor="">{v.price} $</label>
                            <button onClick={()=>editWishList(v.id)} className={`text-[#f54242]    `}>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                                <g transform="translate(0 -1028.4)">
                                  <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#e74c3c"/>
                                </g>
                            </svg>
                            </button>
                        </div>
                        <div>{v.name}</div>    
                  </div>
              </div>     
              </div>)
            })}
            
        </div>
  


  </>
  );
}

export default StoreGrid
