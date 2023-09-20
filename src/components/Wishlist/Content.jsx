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
          brand:pro.brand,
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
      <div key={`${c.id}-${c.color}-${c.size}`} className='flex first:border-0 first:phone:pt-[1%] border-t-[1px] border-t-gray2 flex-row phone:pb-[.5%] phone:pt-[3%] py-[5%]'>
          <div className='w-[20%] phone:w-[10%]'>
              <NavLink to={`/product/${c.id}?color=${c.color}`} className="w-full">
                <div style={{backgroundImage:`url(${c.img})`}} className='w-full pb-[150%]  imgBack'></div>
              </NavLink>
          </div>
          <div className='w-[80%] phone:w-full flex flex-col pl-[2%]'>
           <div className='phone:flex phone:flex-row w-full phone:justify-between'> 
              <div>
                    <div className='flex flex-col '>
                        <label htmlFor="">{c.brand}</label>
                        <label htmlFor="">{c.name}</label>
                    </div>
                    <div className='flex flex-col my-[3%] phone:my-[8%]'>
                        <label htmlFor="">Size:{c.size}</label>
                        <label htmlFor="">Color:{c.colorName}</label>
                    </div>
                </div>

                <div>

                  <div className='flex flex-col phone:items-end mb-[2%]'>
                      <label className='mb-[3%] phone:mb-[10%] text-priceColor' htmlFor="">${c.price}</label>
                      <label className='' htmlFor="">Now:${c.price}</label>
                      <label className=' line-through' htmlFor="">Was:${c.price}</label>
                  </div>

                </div>
            </div>
            <div className='flex flex-row items-center justify-start phone:my-[3%] my-[5%]'>
                 <div className=' w-[30%]  phone:w-auto phone:mr-[5%] text-blue text-start' >
                   <button onClick={()=>handleSbChange(c.p)}>Remove</button>
                 </div>
                 <div className=' w-[40%] phone:w-auto  text-blue text-start' onClick={()=>handleSbSflChange(c.p)}>
                    <button onClick={()=>handleSbChange(c.p)}>{text}</button>
                 </div>
            </div>

          </div>
      </div>
   )
}

export default Content
