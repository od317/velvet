import React from 'react'
import { useContext,useState } from 'react'
import {Routes,Route,Link, BrowserRouter, useLocation,useSearchParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Card from './Card'
import './styles.css/storeGrid.css'
function StoreGrid({items}) {

  const [searchParams,setSearchParams]  = useSearchParams()
  const searchq = searchParams.get('searchq')
  const handleSearchqRemove = ()=>{
    searchParams.delete('searchq')
    setSearchParams(searchParams)
  }
  return (
   <>
      <div className='navmid:hidden' htmlFor="">{items.length} items</div>
      {searchq &&<button onClick={()=>{handleSearchqRemove()}} className='font-semibold text-start flex flex-row items-center hover:bg-gray2   py-[.5%] mb-[.5%] text-[110%]'>
        <label className=' cursor-pointer w-full mr-[.5%]' htmlFor="">result for <span>{searchq}</span></label>
        <ion-icon name="close-outline"></ion-icon>
      </button>}
      { items.length>0 && <div className=' grid grid-cols-2 phone:grid-cols-3 gap-x-[2%] mb-[5%] navmid:grid-cols-4 mt-[2%] phone:mt-[0%]  w-full  '>
            {items.map((v,i)=>{
              return(<div className='  mb-[8%] border-gray2 border-[1px]' key={v.id}>
               <Card product={v}></Card>
              </div>)
            })}
      </div>
      }
      {
        items.length<=0 && <div className=' flex flex-row text-[130%] items-center justify-center w-full pt-[10%]'>
          no products found
        </div>
      }
  </>
  );
}



export default StoreGrid
