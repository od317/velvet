import React from 'react'
import { useContext,useState } from 'react'
import {WishlistContext,setWishlistContext} from '../../contexts/cartContext'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'

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
      <div className='phone:grid grid-cols-3 w-full  '>
            {items.map((v,i)=>{
              return(<div key={i}>
              <div className='w-[100%]'>
                    <div>
                    <Link to={`/product/${v.id}`}>
                    {v.size} / {v.price} / {v.date} / {v.id} / {v.name}
                    </Link>
                    </div>
                  <button onClick={()=>editWishList(v.id)} className={` ${checkInWishList(v.id) ? 'bg-[#f54242]':'bg-black'} text-white   `}>heart</button>
              </div>     
              </div>)
            })}
            
        </div>
  
      <div className=' phone:hidden grid grid-cols-2 '>

      </div>

  </>
  );
}

export default StoreGrid
