import React from 'react'
import {m} from '../../Data/items'
import {handleSbSflChangeContext,handleSbChangeContext} from '../../contexts/cartContext'
import { NavLink } from 'react-router-dom'
import './styles/wishlist.css'
function Content({items,text}) {
    let content = []
    items.forEach(i=>{
        let cur = i.split('-')
        let pro = m[cur[0]]
        console.log(pro)
        content = [...content,{
          id:pro.id,
          name:pro.name,
          color:cur[1],
          size:cur[2],
          img:pro.img[cur[1]].imgs[0],
          price:pro.price,
        }]
    })
  return (
    <div className='bg-p1 px-[4%] py-[2%]'>
        {content.map(c=>{
            return(<div key={`${c.id}-${c.color}-${c.size}`} className='flex flex-row my-[5%]'>
                     <div className='w-[20%]'>
                         <NavLink to={`/product/${c.id}?color=${c.color}`} className="w-full">
                            <div style={{backgroundImage:`url(${c.img})`}} className='w-full pb-[150%] imgBack'></div>
                         </NavLink>
                     </div>
                     <div className='w-[80%] flex flex-col imgBack'>
                        {c.name}
                     </div>
                  </div>)
        })}
    </div>
  )
}

export default Content
