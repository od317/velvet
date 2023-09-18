import React from 'react'
import {m} from '../../Data/items'
import {handleSbSflChangeContext,handleSbChangeContext} from '../../contexts/cartContext'
import { NavLink } from 'react-router-dom'
import './styles/wishlist.css'
import { useContext } from 'react'
function Content({items,text}) {
    let content = []
    items.forEach(i=>{
        let cur = i.split('-')
        let pro = m[cur[0]]
        content = [...content,{
          id:pro.id,
          name:pro.name,
          color:cur[1],
          size:cur[2],
          img:pro.img[cur[1]].imgs[0],
          price:pro.price,
          colorName:pro.img[cur[1]].name,
          p:i
        }]
    })
  return (
    <div className=' py-[2%]'>
        {content.map(c=>{
            return(
              <Card text={text} key={`${c.id}-${c.color}-${c.size}`} c={c}></Card>
            )
        })}
    </div>
  )
}

const Card = ({c,text})=>{
      const handleSbChange = useContext(handleSbChangeContext)
      const handleSbSflChange = useContext(handleSbSflChangeContext)
      return(
      <div key={`${c.id}-${c.color}-${c.size}`} className='flex flex-row my-[5%]'>
          <div className='w-[20%]'>
              <NavLink to={`/product/${c.id}?color=${c.color}`} className="w-full">
                <div style={{backgroundImage:`url(${c.img})`}} className='w-full pb-[150%] imgBack'></div>
              </NavLink>
          </div>
          <div className='w-[80%] flex flex-col pl-[2%]'>
            <div className='flex flex-col'>
                <label htmlFor="">{c.brand}</label>
                <label htmlFor="">{c.name}</label>
            </div>
            <div className='flex flex-col my-[3%]'>
                <label htmlFor="">Size:{c.size}</label>
                <label htmlFor="">Color:{c.colorName}</label>
            </div>

            <div className='flex flex-col mb-[2%]'>
                <label className='mb-[3%] text-priceColor' htmlFor="">${c.price}</label>
                <label className='' htmlFor="">Now:${c.price}</label>
                <label className=' line-through' htmlFor="">Was:${c.price}</label>
            </div>

            <div className='flex flex-row items-center justify-start my-[5%]'>
                 <button className='w-[50%] text-start' onClick={()=>handleSbChange(c.p)}>Remove</button>
                 <button className='w-[50%] text-start' onClick={()=>handleSbSflChange(c.p)}>{text}</button>
            </div>

          </div>
      </div>
   )
}

export default Content
