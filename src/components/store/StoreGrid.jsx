import React from 'react'
import { useContext,useState } from 'react'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Card from './Card'
import './styles.css/storeGrid.css'
function StoreGrid({items}) {

  

  return (
   <>
      <div className=' grid grid-cols-2 phone:grid-cols-3 gap-x-[2%] mb-[5%] mid:grid-cols-4 mt-[2%] phone:mt-[0%]  w-full  '>
            {items.map((v,i)=>{
              return(<div className='  mt-[10%] border-gray2 border-[1px]' key={v.id}>
               <Card product={v}></Card>
              </div>)
            })}
            
      </div>
  


  </>
  );
}



export default StoreGrid
