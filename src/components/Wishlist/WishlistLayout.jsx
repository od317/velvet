import React, { useContext } from 'react'
import { WishlistContext,setWishlistContext,handleWishlistChangeContext} from '../../contexts/cartContext'
import items from '../../Data/items'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import Card from '../store/Card'
import { useState } from 'react'
import SavedForLater from './SavedForLater'
import ShoppingBag from './ShoppingBag'
function WishlistLayout() {
  const wishlist = useContext(WishlistContext)
  const setWishlist = useContext(setWishlistContext)
  const handleWishlistChange = useContext(handleWishlistChangeContext)
  const wishlistContent = items
  const [curPage,setCurPage] = useState('bag')
  return (
    <>   
        <div className='  flex flex-col h-full items-center justify-center w-full mt-[5%] bg-p1'>
          <div className='flex flex-row w-full phone:w-[30%] px-[4%]'>
                <button className={`w-[50%] text-center ${ curPage==='bag' ? 'border-b-[2px] border-b-black font-bold':'border-b-[1px] border-gray'} py-[5%] text-[105%]`} onClick={()=>setCurPage('bag')}>
                  Shoping Bag (1)</button>
                <button className={`w-[50%] text-center ${ curPage==='sfl' ? 'border-b-[2px] border-black font-bold':' border-b-[1px] border-gray '}   py-[5%] text-[105%]`} onClick={()=> setCurPage('sfl')}>sfl</button>
          </div>
          <p className=' px-[4%] py-[3%] w-full phone:w-[50%] phone:text-center'>
            Items in your bag are not on hold. <br />
            <ion-icon name="gift-outline"></ion-icon> Choose gift options when you check out.
          </p>
        </div>
        
        <br />
        {curPage ==='bag'?
        <ShoppingBag handlePageChange={setCurPage}></ShoppingBag>:
        <SavedForLater handlePageChange={setCurPage}></SavedForLater>
        }
    </>
  )
}

export default WishlistLayout