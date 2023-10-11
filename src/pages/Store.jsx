import React from 'react'
import { useContext} from 'react'
import {WishlistContext, setWishlistContext} from '../contexts/cartContext'
import { Routes, Route, useParams, useSearchParams } from 'react-router-dom'
import {useEffect} from 'react'
import StoreLayout from '../components/store/StoreLayout'
import {filters} from '../Data/FIlters'
function Store() {
  const wishlist = useContext(WishlistContext)
  const setWishlist = useContext(setWishlistContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const id = useParams().id
  const filterP = 
    filters.map(f=>{
      return{
        name:f.name,
        val: searchParams.get(f.name) ? pa(searchParams.get(f.name)) : []
      } 
    })

    function pa(s){
             return  s.split(',')
    }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className=''>
      {/* <div className=' hidden phone:block  bg-p1 px-[2%] mt-[2%]'>
            <div className='flex py-[1.5%] px-[2%] flex-col text-white w-full font-Lato bg-dark2'>
                <label className=' text-[110%] font-bold'>Ladies Tops</label>
                <label htmlFor="">70% on shirts and tops</label>
            </div>
      </div> */}
      <StoreLayout page={searchParams.get('page')} id={id} filterP={filterP} sortP={searchParams.get('sort')}/>    
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
