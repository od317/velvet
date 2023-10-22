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


function SmallSearchPage({show,setShow}) {
 
 
  const [searchq,setSearchq] = useState('')  
  const [searchParams,setSearchParams] = useSearchParams()
  const [loading,setLoading] = useState(false)
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
      console.log(location.pathname.split('/'))
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
      setLoading(searchq.length>0)
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
                          <button className='flex flex-grow  flex-row items-center relative  justify-end'>
                          <div className="h-fit inline-block text-[110%]">
                                <ion-icon name="close-outline"></ion-icon>
                          </div>
                          </button>
                      </form>
                      <div  className={`w-full  px-[2%] overflow-hidden flex flex-col h-fit  transition-all duration-[300ms] bg-p1 z-10 border-gray3  border-b-[1px]`}>
                          
                          { loading && <div className='w-full  flex items-center justify-center py-[5%] text-[200%]'>
                              <div className=' animate-spin'>
                                  <ion-icon name="bag-outline"></ion-icon>
                              </div>
                          </div>}
                          <div className={`${ show  ?' ':' opacity-0 '} transition-all duration-[500ms]`}>
                              {itemsShow.length>0 &&<Bslide num={2}  items={itemsShow}></Bslide>}
                          </div>
                          <div className='flex flex-row py-[10%] px-[5%]'>
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
                      </div>
                </div>
            </div>
            <div className='flex-grow w-full  bg-black bg-opacity-50 min-h-screen'>

            </div>
      </div>
      </>
    )
}

export default SmallSearchPage