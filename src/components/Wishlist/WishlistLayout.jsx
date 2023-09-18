import React, { useContext } from 'react'
import { SbContext,handleSbSflChangeContext,handleSbChangeContext} from '../../contexts/cartContext'
import items from '../../Data/items'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import Card from '../store/Card'
import { useState } from 'react'
import SavedForLater from './SavedForLater'
import ShoppingBag from './ShoppingBag'
function WishlistLayout() {
  const [curPage,setCurPage] = useState('bag')
  const sb = useContext(SbContext)
  const handleSbSflChange = useContext(handleSbSflChangeContext)
  let items = Array.from(sb)
  console.log(items)
  let shopingBagContent = items.filter(i=>{
    let cur = i.split('-') 
    if(cur[cur.length-1]==='sb')
      return i  
  })

  let savedForLaterContent = items.filter(i=>{
    let cur = i.split('-') 
    if(cur[cur.length-1]==='sfl')
      return i  
  })

  return (
    <>   
        <div className='  flex flex-col h-full items-center justify-center phone:py-[2%] w-full mt-[5%] bg-p1'>
          <div className='flex flex-row w-full phone:w-[40%]  px-[4%]'>
                <button className={`w-[50%] text-center ${ curPage==='bag' ? 'border-b-[2px]  border-b-black font-semibold phone:bg-gray4':'border-b-[1px] border-gray'} phone:border-[1px] phone:border-gray3 py-[5%] phone:py-[3%] text-[105%]`} onClick={()=>setCurPage('bag')}>
                  Shoping Bag {shopingBagContent.length?(<>({shopingBagContent.length})</>):''}</button>
                <button className={`w-[50%] text-center ${ curPage==='sfl' ? 'border-b-[2px]  border-black font-semibold phone:bg-gray4 ':' border-b-[1px] border-gray '} phone:border-[1px] phone:border-gray3  py-[5%] phone:py-[3%] text-[105%]`} onClick={()=> setCurPage('sfl')}>
                  Saved For Later {savedForLaterContent.length?(<>({savedForLaterContent.length})</>):''}
                </button>
          </div>
          <p className=' px-[4%] py-[3%] phone:py-[1%] w-full phone:w-[50%] phone:text-[90%] phone:text-center'>
            Items in your bag are not on hold. <br />
            <ion-icon name="gift-outline"></ion-icon> Choose gift options when you check out.
          </p>
        </div>
        
        <br />
        {curPage ==='bag'?
        <ShoppingBag handleSbSflChange={handleSbSflChange} items={shopingBagContent} handlePageChange={setCurPage}></ShoppingBag>:
        <SavedForLater handleSbSflChange={handleSbSflChange} items={savedForLaterContent} handlePageChange={setCurPage}></SavedForLater>
        }
    </>
  )
}

export default WishlistLayout