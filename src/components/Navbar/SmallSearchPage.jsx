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


function SmallSearchPage({show,setShow}) {
 
 
  const [searchq,setSearchq] = useState('')  
  const [searchParams,setSearchParams] = useSearchParams()
  const [loading,setLoading] = useState(true)
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
      e.preventDefault()
      setShow(false)
      if(location.pathname.split('/')[1]==='store'){
          searchParams.set('searchq',searchq)
          searchParams.set('page',1)
          setSearchParams(searchParams)
      }
      else
      navigate(`/store?searchq=${searchq}&page=1&sort=featured`,{replace:true})

  }

  useEffect(()=>{
      let s
      setLoading(true)
      if(searchq.length>0){
      s = setTimeout(searchItems,1000)
      } 
      return()=>{
          clearTimeout(s)
      }
  },[searchq])
  return (
      <>
      <div className='flex h-full w-full flex-col z-20 absolute'>
            <div className='  text-black top-0 w-full   h-fit  z-20'>
              <div className='w-[100%] bg-p1 relative  bc box-content items-center    '>
                      <form  onSubmit={(e)=>handleFormSubmit(e)} ref={form}  className='w-full text-[125%] px-[2%] ms:px-[0%] py-[3%] flex flex-row  border-b-[1px]  border-gray3 ' action="">
                          <button className='w-[5%] ml-[2%]' type='submit'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </button>
                          <input value={searchq} onChange={(e)=>{setSearchq(e.target.value)}} placeholder='search for product or brand' className='w-[70%] ml-[2%]' type="text" name="" id="" />
                          <div className='flex flex-grow  flex-row items-center relative  justify-end'>
                          <button onClick={()=>{setShow(false)}} className="h-fit  inline-block text-[110%]">
                                <ion-icon name="close-outline"></ion-icon>
                          </button>
                          </div>
                      </form>
                      <div  className={`w-full  px-[2%] overflow-hidden flex flex-col h-fit  transition-all duration-[300ms] bg-p1 z-10 border-gray3  border-b-[1px]`}>
                          
                           { loading && searchq.length>0 && <div className='w-full  flex items-center justify-center py-[5%] text-[200%]'>
                                    <div className=' animate-spin'>
                                        <ion-icon name="bag-outline"></ion-icon>
                                    </div>
                             </div>}
                                <div className={`${ show  ?' ':' opacity-0 '} transition-all fle flex-col duration-[500ms]`}>
                                    {itemsShow.length>0 &&
                                    <>
                                    <Bslide num={3}  items={itemsShow}></Bslide>
                                    <button onClick={()=>{
                                       setShow(false)
                                       navigate(`/store?searchq=${searchq}&page=1&sort=featured`,{replace:true})
                                    }} className='mb-[2%]'>show all</button>
                                    </>}
                                </div>
                            { !loading && searchq.length>0 && itemsShow.length==0 &&<div className='w-full pl-[5%]  flex items-center  py-[5%] text-[110%]'>
                                <div className=''>
                                    no results found
                                </div>
                            </div>}
                    
                            { itemsShow.length==0 &&                          
                            <div className='flex flex-row py-[10%] px-[5%]'>
                                <div className='flex flex-col w-[50%]'>
                                    <label className='font-semibold mb-[.5%] text-[110%]' htmlFor="">Popular Searches</label>
                                    {psLinks.map(p=>{
                                        return(<>
                                            <NavLink key={p.name} onClick={()=>{
                                        setShow(false)
                                     }} className={' pl-[1%] w-fit mb-[2%]'} to={`/store?searchq=${p.dist}&page=1&sort=featured`}>{p.name}</NavLink>       
                                        </>)
                                    })}
                                </div>
                                <div className='flex flex-col w-[50%]'>
                                    <label className='font-semibold mb-[.5%] text-[110%]' htmlFor="">suggested</label>
                                    {sLinks.map(p=>{
                                        return(<>
                                            <NavLink onClick={()=>{
                                        setShow(false)
                                     }} key={p.name} className={' pl-[1%] w-fit mb-[2%]'} to={`/store?searchq=${p.dist}&page=1&sort=featured`}>{p.name}</NavLink>       
                                        </>)
                                    })}
                                </div>
                          </div>}
                      </div>
                </div>
            </div>
            <div onClick={()=>{ setShow(false) }} className='flex-grow w-full  bg-black bg-opacity-50 min-h-screen'>

            </div>
      </div>
      </>
    )
}

export default SmallSearchPage