import React from 'react';
import { useContext } from 'react';
import {WishlistContext, setWishlistContext} from '../contexts/cartContext'
function Store() {
  const wishlist = useContext(WishlistContext)
  const setWishlist = useContext(setWishlistContext)
  return (
    <div>
      {wishlist}
      <br />
      <button onClick={()=>{
        setWishlist(e=> [...e,'1'])
        localStorage.setItem('wishlist',JSON.stringify([...wishlist,'1']))
        }}>click</button>
    </div>
  );
}

export default Store;
