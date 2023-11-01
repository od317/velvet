import React from 'react'
import WishlistLayout from '../components/Wishlist/WishlistLayout'
import { useEffect } from 'react'
import {Helmet} from "react-helmet"

function WishList() {

  return (
    <>
    <Helmet>
          <title>NordeStrom wishlist</title>
    </Helmet>
    <div className='phone:px-[2%] pt-[2%]  bg-light2 '> 
        <WishlistLayout/>
    </div>
    </>
  )
}

export default WishList