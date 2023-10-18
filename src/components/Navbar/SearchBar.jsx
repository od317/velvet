import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './styles/navbar.css'
import Small from './SearchSlide'
import Bslide from '../Sliders/Bslide'
import { useEffect } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import items from '../../Data/items'
import getSearchedItems from '../../Data/getSearchedItems'
function SearchBar() {
    const [searchq,setSearchq] = useState('')  
    const [loading,setLoading] = useState(false)
    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)
    const [itemsShow,setItemsShow] = useState([])
    const form = useRef(null)
    const navigate = useNavigate()
   const searchItems = ()=>{
         setItemsShow(getSearchedItems(searchq))
         setLoading(false)  
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        navigate(`/store?searchq=${searchq}&page=1&sort=featured`,{replace:true})

    }

    useEffect(()=>{
        let s
        setLoading(searchq.length>0)
        if(searchq.length>0){
        s = setTimeout(searchItems,1000)
        } 
        return()=>{
            clearTimeout(s)
        }
    },[searchq])

    useEffect(()=>{
        const click = ()=>{
              if(!show2){
                setShow(false)
              }
        }
        window.addEventListener('click',click)
        return()=>{
            window.removeEventListener('click',click)
        }
    })



    return (
    <>
    <div  onClick={()=>{setShow(true)}} onMouseOver={()=>{setShow2(true)}} onMouseLeave={()=>{setShow2(false)}}  className='navmid:w-[46%] relative navmid:ml-[2%] bc box-content items-center  pl-[2%] navmid:px-[0%] '>
                <form  onSubmit={(e)=>handleFormSubmit(e)} ref={form}  className='w-full text-[125%] px-[2%] ms:px-[0%] py-[3%]  navmid:py-[1%] border-[1px] border-gray3 navmid:text-[100%]' action="">
                    <button className='w-[5%] ml-[2%]' type='submit'>
                       <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input value={searchq} onChange={(e)=>{setSearchq(e.target.value)}} placeholder='search for product or brand' className='w-[90%]' type="text" name="" id="" />
                </form>
                <div  className={`w-full absolute px-[2%] overflow-hidden flex flex-col h-fit ${ show  ?'max-h-[100rem] ':'max-h-[0rem] opacity-0'} transition-all duration-[300ms] bg-p1 z-10 border-gray3 border-t-0 border-[1px]`}>
                    
                    { loading && <div className='w-full  flex items-center justify-center py-[5%] text-[200%]'>
                        <div className=' animate-spin'>
                            <ion-icon name="bag-outline"></ion-icon>
                        </div>
                    </div>}
                    <div className={`${ show  ?' ':' opacity-0 '} transition-all duration-[500ms]`}>
                         {itemsShow.length>0 &&<Bslide num={3}  items={itemsShow}></Bslide>}
                    </div>
                    {itemsShow.length==0 &&
                     <div className='flex flex-row px-[5%]'>
                        <div className='flex flex-col w-[50%]'>
                            <label htmlFor="">suggested</label>
                            <NavLink to={'/store'}>store</NavLink>
                            <NavLink to={'/store'}>store</NavLink>
                            <NavLink to={'/store'}>store</NavLink>
                            <NavLink to={'/store'}>store</NavLink>
                        </div>
                        <div className='flex flex-col w-[50%]'>
                            <NavLink to={'/store'}>store</NavLink>
                            <NavLink to={'/store'}>store</NavLink>
                            <NavLink to={'/store'}>store</NavLink>
                            <NavLink to={'/store'}>store</NavLink>
                        </div>
                     </div>
                    }
                </div>
     </div>
    </> 
)
}

export default SearchBar;