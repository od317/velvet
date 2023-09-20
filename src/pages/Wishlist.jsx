import React from 'react'
import WishlistLayout from '../components/Wishlist/WishlistLayout'
import { useEffect } from 'react'
function WishList() {
  useEffect(() => {
    window.scrollTo(0, 0)
     })
  return (
    <div className='phone:px-[2%]'>
        <WishlistLayout/>
    </div>
  )
}

export default WishList