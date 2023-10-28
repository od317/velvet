import React from 'react'
import { useState,useRef,useContext,useEffect } from 'react'
import {Routes,Route,NavLink, BrowserRouter,useNavigate,useLocation} from 'react-router-dom'

const links = [
   {
    name:'clothing',
    bold:true,
    links:[
      {
        name:'coats',
        dist:'coat'
      },
      {
        name:'jackets',
        dist:'jacket'
      },
      {
        name:'jeans',
        dist:'jeans'
      },
    ]
   },
   {
    name:'clothing',
    bold:false,
    links:[
      {
        name:'coats',
        dist:'coat'
      },
      {
        name:'jackets',
        dist:'jacket'
      },
      {
        name:'jeans',
        dist:'jeans'
      },
    ]
   },
   {
    name:'clothing',
    bold:false,
    links:[
      {
        name:'coats',
        dist:'coat'
      },
      {
        name:'jackets',
        dist:'jacket'
      },
      {
        name:'jeans',
        dist:'jeans'
      },
    ]
   },
   {
    name:'clothing',
    bold:false,
    links:[
      {
        name:'coats',
        dist:'coat'
      },
      {
        name:'jackets',
        dist:'jacket'
      },
      {
        name:'jeans',
        dist:'jeans'
      },
    ]
   },
   {
    name:'clothing',
    bold:false,
    links:[
      {
        name:'coats',
        dist:'coat'
      },
      {
        name:'jackets',
        dist:'jacket'
      },
      {
        name:'jeans',
        dist:'jeans'
      },
    ]
   },
]

function Discover({showMore,setShowMore,setShowMoreMouseOver}) {
    const [dropDownImgNum,setDropDownImgNum] = useState(0)
    const navigate = useNavigate()
    const linksv = links
    const handleLinkClick =(link)=>{
      setShowMore(false)
      setShowMoreMouseOver(false)
      navigate(`/store/${link}?page=1&sort=featured`,{replace:true})

  }
  return (
    <div onMouseOver={()=>setShowMoreMouseOver(true)} onMouseLeave={()=>setShowMoreMouseOver(false)} className={`${showMore ? 'max-h-screen':'max-h-[0rem]'}  flex flex-col overflow-hidden transition-all duration-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)]   left-0 w-full absolute bg-p1 z-10  `} >
    <div className='flex flex-row w-full px-[2.5%] text-[120%] justify-end'>
        <button className={`${showMore?'':'opacity-0'} transition-all duration-150`} onClick={()=>{
                                setShowMore(false)
                                setShowMoreMouseOver(false)
        }} ><ion-icon name="close-outline"></ion-icon></button>
    </div>
    <div className={` ${showMore ? '':'opacity-0'} transition-all duration-150  flex flex-row justify-center  px-[2.5%] w-full mt-[1%] pb-[4%]`}>
          
          {linksv.map(l=>{
            return(
          <div key={l.name}  className=" w-[17%]   flex flex-col">
               <List handleLinkClick={handleLinkClick} name={l.name} bold={l.bold} links={l.links} ></List>
          </div>
            )
          })}

          <div className=" w-[17%]   flex flex-col justify-start items-end">
                   <img className='w-[90%]' src="https://n.nordstrommedia.com/id/1c046571-0eb0-4cdd-aba6-ff4f3b68ba51.jpeg" alt="" />
          </div>
    </div>
</div>
  )
}

const List = ({name,links,bold,handleLinkClick})=>{
      return(<>
      
            <label className=' font-bold text-[110%] ' htmlFor="">{name}</label>
                {links.map(l=>{
                  return(<>
                      <label key={name} onClick={()=>handleLinkClick(l.dist)} className=' inline-block mb-[2%] w-fit cursor-pointer' onMouseLeave={()=> setDropDownImgNum(0)} onMouseOver={()=> setDropDownImgNum(1)} htmlFor="">{l.name}</label>     
                  </>)
                })}

      </>)
}

export default Discover
