import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './styles/navbar.css'
import Small from './SearchSlide'
import Bslide from '../Sliders/Bslide'
import { useEffect } from 'react'
import { NavLink,useNavigate,useParams,useSearchParams} from 'react-router-dom'
import { useRef } from 'react'
import items from '../../Data/items'
import getSearchedItems from '../../Data/getSearchedItems'
import { useLocation } from 'react-router-dom'


const psLinks = [
    {
        name:'boots',
        dist:'boot'
    },
    {
        name:'jacket',
        dist:'jacket'
    },
    {
        name:'coats',
        dist:'coat'
    },
    
    {
        name:'jeans',
        dist:'jeans'
    },
]

const sLinks = [
    {
        name:'Canada Goose',
        dist:'Canada Goose'
    },
    {
        name:'Lauren Ralph Lauren',
        dist:'Lauren Ralph Lauren'
    },
]

function SearchBar() {
    const [searchq,setSearchq] = useState('')  
    const [searchParams,setSearchParams] = useSearchParams()
    const [loading,setLoading] = useState(true)
    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)
    const [itemsShow,setItemsShow] = useState([])
    const form = useRef(null)
    const location = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    const searchItems = ()=>{
         setItemsShow(getSearchedItems(searchq))
         setLoading(false)  
    }


    const handleFormSubmit = (e)=>{
        setShow(false)
        setShow2(false)
        e.preventDefault()
        navigate(`/store?searchq=${searchq}&page=1&sort=featured`,{replace:true})
    }

    useEffect(()=>{
        let s
        setLoading(true)
        setItemsShow([])
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
    <div  onClick={()=>{setShow(true)}} onMouseOver={()=>{setShow2(true)}} onMouseLeave={()=>{setShow2(false)}}  className='navmid:w-[100%] relative navmid:ml-[2%] bc box-content items-center   navmid:px-[0%] '>
                <form ref={form} onSubmit={(e)=>handleFormSubmit(e)}   className='w-full text-[125%] px-[2%] ms:px-[0%] py-[3%]  navmid:py-[1%] border-[1px] border-gray3 navmid:text-[100%]' action="">
                    <button className='w-[5%] ml-[2%]' type='submit'>
                       <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input value={searchq} onChange={(e)=>{setSearchq(e.target.value)}} placeholder='search for product or brand' className='w-[90%] ml-[2%]' type="text" name="" id="" />
                </form>
                <div  className={`w-full absolute px-[2%] overflow-hidden flex flex-col h-fit ${ show  ?'max-h-[100rem] ':'max-h-[0rem] opacity-0'} transition-all duration-[300ms] bg-p1 z-10 border-gray3 border-t-0 border-[1px]`}>
                    
                    { loading && itemsShow.length == 0 && searchq.length>0 && <div className='w-full  flex items-center justify-center py-[5%] text-[200%]'>
                        <div className=' animate-spin'>
                            <ion-icon name="bag-outline"></ion-icon>
                        </div>
                    </div>}
                    <div className={`${ show  ?' ':' opacity-0 '} transition-all duration-[500ms]`}>
                         {itemsShow.length>0 &&
                         <div className='flex flex-col items-end'>
                         <Bslide num={3}  items={itemsShow}></Bslide>
                         <button onClick={()=>{
                                setShow(false)
                                setShow2(false)
                                navigate(`/store?searchq=${searchq}&page=1&sort=featured`,{replace:true})
                         }} className='mb-[2%]'>show all</button>
                         </div>
                         }
                    </div>
                    { !loading && searchq.length>0 && itemsShow.length==0 && <div className='w-full  flex items-center pl-[5%] py-[5%] text-[110%]'>
                        <div className=''>
                             no results found
                        </div>
                    </div>}
                    {itemsShow.length==0 &&
                     <div className='flex flex-row px-[5%] py-[2%]'>
                        <div className='flex flex-col w-[50%]'>
                            <label className='font-semibold mb-[.5%] text-[110%]' htmlFor="">Popular Searches</label>
                            {psLinks.map(p=>{
                                return(
                                     <NavLink onClick={()=>{
                                        setShow(false)
                                        setShow2(false)
                                     }} key={p.dist} className={' pl-[1%] w-fit mb-[2%]'} to={`/store?searchq=${p.dist}&page=1&sort=featured`}>{p.name}</NavLink>       
                                )
                            })}
                        </div>
                        <div className='flex flex-col w-[50%]'>
                            <label className='font-semibold mb-[.5%] text-[110%]' htmlFor="">suggested</label>
                            {sLinks.map(p=>{
                                return(
                                     <NavLink onClick={()=>{
                                        setShow(false)
                                        setShow2(false)
                                     }} key={p.dist} className={' pl-[1%] w-fit mb-[2%]'} to={`/store?searchq=${p.dist}&page=1&sort=featured`}>{p.name}</NavLink>       
                                )
                            })}
                        </div>
                     </div>
                    }
                </div>
     </div>
    </> 
)
}

export default SearchBar;