import React from 'react'
import { useContext} from 'react'
import {WishlistContext, setWishlistContext} from '../contexts/cartContext'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import {useEffect} from 'react'
import HeaderSlider from '../components/store/HeaderSlider'
import StoreLayout from '../components/store/StoreLayout'
function Store() {
  const wishlist = useContext(WishlistContext)
  const setWishlist = useContext(setWishlistContext)
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className=''>
      <div className=' hidden phone:block px-[2%] mt-[2%]'>
            <div className='flex py-[1.5%] px-[2%] flex-col text-white w-full font-Lato bg-dark2'>
                <label className=' text-[110%] font-bold'>Ladies Tops</label>
                <label htmlFor="">70% on shirts and tops</label>
            </div>
      </div>
      <StoreLayout sortP={searchParams.get('sort')}/>    
      {/* {wishlist}
      <br />
      <button onClick={()=>{
        setWishlist(e=> [...e,'1'])
        localStorage.setItem('wishlist',JSON.stringify([...wishlist,'1']))
        }}>click</button> */}
    
    </div>
  );
}

export default Store
