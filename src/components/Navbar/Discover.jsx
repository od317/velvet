import React from 'react'
import { useState,useRef,useContext,useEffect } from 'react'
import {Routes,Route,NavLink, BrowserRouter,useNavigate,useLocation} from 'react-router-dom'

const mainLinks = [
  {
    name:'New Arrivals',
    dist:'/store?page=1&sort=featured'
  },
  {
    name:'Womens sale',
    dist:'/store?page=1&sort=featured&sale=sale'
  },
]

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
    name:'shose',
    bold:true,
    links:[
      {
        name:'boots',
        dist:'boot'
      },
      {
        name:'sneakers',
        dist:'sneakers'
      },
    ]
  },
  {
    name:'brand',
    bold:true,
    links:[
      {
        name:'Canada Goose',
        dist:'Canada Goose'
      },
      {
        name:'Lauren Ralph Lauren',
        dist:'Lauren Ralph Lauren'
      },
    ]
  },
  {
    name:'Handbags',
    bold:true,
    links:[
      {
        name:'Backpacks',
        dist:'backpacks'
      },
    ]
  }
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

    const handleLinkClick2 =(link)=>{
      setShowMore(false)
      setShowMoreMouseOver(false)
      navigate(link)

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
          
          <div className=" w-[17%] flex flex-col">
               {mainLinks.map(l=>{
                return(
                       <label key={l.name} onClick={()=>handleLinkClick2(l.dist)} className='font-semibold  w-fit mb-[2%] cursor-pointer' htmlFor="">{l.name}</label>
                )
               })}
          </div>

          {linksv.map(l=>{
            return(
              <div key={l.name}  className=" w-[17%]   flex flex-col">
                  <List key={l.name} handleLinkClick={handleLinkClick} name={l.name} bold={l.bold} links={l.links} ></List>
              </div>
            )
          })}
          <NavLink onClick={()=>{
                                setShowMore(false)
                                setShowMoreMouseOver(false)
          }} to={`/store?sale=sale`} className=" w-[17%]   flex flex-col justify-start items-end">
                   <img className='w-[90%]' src="https://n.nordstrommedia.com/id/1c046571-0eb0-4cdd-aba6-ff4f3b68ba51.jpeg" alt="" />
          </NavLink>
    </div>
</div>
  )
}

const List = ({name,links,bold,handleLinkClick})=>{
      return(<>
      
            <label className=' font-bold text-[110%] capitalize ' htmlFor="">{name}</label>
                {links.map(l=>{
                  return(
                      <label key={l.name} onClick={()=>handleLinkClick(l.dist)} className=' border-b-2 border-b-p1 hover:border-b-black transition-all duration-200 inline-block mb-[2%] w-fit cursor-pointer'  htmlFor="">{l.name}</label>     
                  )
                })}

      </>)
}

export default Discover
