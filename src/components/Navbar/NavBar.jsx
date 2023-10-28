import React from 'react'
import { useState,useRef,useContext,useEffect } from 'react'
import { SbContext} from '../../contexts/cartContext'
import {Routes,Route,NavLink, BrowserRouter, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './styles/navbar.css'
import SearchBar from './SearchBar'
import SmallSearchPage from './SmallSearchPage'
import Discover from './Discover'

function NavBar() {
    const sbList = useContext(SbContext)
    const [searchBar,setSearchBar] = useState(false)
    const [searchq,setSearchq] = useState('')
    const [curScroll,setCurScroll] = useState(0)
    const [show,setShow] = useState(true)
    const [showMore,setShowMore] = useState(false)
    const [showMoreMouseOver,setShowMoreMouseOver] = useState(false)
    const [showSide,setShowSide] = useState(false)
    const navRef = useRef(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const sideBarLinks = [
        {
            name:'home',
            dist:'',
            icon:'home-outline'
        },
        {
            name:'store',
            dist:'store',
            icon:'bag-outline'
        },
    ]
    const sideBarBottomLinks = [
        {
            name:'coats',
            dist:'store/coat'
        },
        {
            name:'boots',
            dist:'store/boot'
        },
        {
            name:'jeans',
            dist:'store/jeans'
        },
        {
            name:'suit',
            dist:'store/suit'
        },
        {
            name:'sweatshirt',
            dist:'store/sweatshirt'
        },
        {
            name:'jacket',
            dist:'store/jacket'
        },
        {
            name:'sneakers',
            dist:'store/sneakers'
        },
        
    ]
    const [showSearchPage,setShowSearchPage] = useState(false)
    const handleSideShowChange = (value)=>{
        setShowSide(value)
        if(value){
            document.querySelector('body').style.overflowY='hidden'
        }else 
          document.querySelector('body').style.overflowY='visible'
        }

    const handleShowSearchPageChange = (value)=>{
        setShowSearchPage(value)
        if(value){
            document.querySelector('body').style.overflowY='hidden'
        }else 
          document.querySelector('body').style.overflowY='visible'
        }
    

    useEffect(()=>{
        const handleWindowResize = ()=>{
            setWindowWidth(window.innerWidth)
            if(window.innerWidth >= 450){
                 document.querySelector('body').style.overflowY='auto'
                 setShow(false)
            }
            if(window.innerWidth < 860){
                setShowMore(false)
             }
            if(windowWidth.innerWidth>=860){
                handleShowSearchPageChange(false)
            }   
        }
        const handlePageClick = ()=>{
              if(showMoreMouseOver)
                 return
              setShowMore(false)                 
        }
        window.addEventListener('resize', handleWindowResize)
        window.addEventListener('click', handlePageClick) 
        return ()=>{
            window.removeEventListener('resize',handleWindowResize)
            window.removeEventListener('click', handlePageClick)
        }
    })

    return (<>
         
        { windowWidth < 860 && showSearchPage && <SmallSearchPage show={showSearchPage} setShow={handleShowSearchPageChange}></SmallSearchPage>}        

        <div className='flex flex-col pb-[1%]'>
 
            {/* <div className='text-center text-[110%] py-[2%]  phone:px-[0%] navmid:text-[100%] text-white bg-black navmid:py-[.7%]'>
                 <span className=' font-semibold mr-[.1%]'>Earn 5X the points on beauty!</span> 
                 A Nordy Club exclusive
                {showMore}

            </div> */}

           <div className='w-full  ms:px-[2%] relative px-[2%] pt-[2%]'>
                <div className='w-full flex flex-col navmid:border-b-[1px]  border-gray3 pb-[1.2%]'>
                     <div className='flex flex-col pr-[2%]  navmid:px-[0%] navmid:flex-row navmid:justify-between w-full'>
                             <div className='flex navmid:w-[20%]  flex-row mb-[2%] navmid:mb-[0%] navmid:flex'>
                                    <div className='navmid:hidden flex items-center justify-start w-[8%]' onClick={()=>handleSideShowChange(!showSide)}>
                                        <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                                    </div>
                                    <div  className='flex-grow  flex'>
                                        <NavLink style={{backgroundImage:'url()'}} className='   navmid:w-full  flex items-center justify-start h-full font-semibold  text-[120%] navmid:text-[180%]' to={'/'}>
                                            <img className='navmid:w-[75%]' src="https://n.nordstrommedia.com/alias/nordstrom-logo.svg" alt="" />
                                        </NavLink>
                                    </div>
                                    <button className={'navmid:hidden'} onClick={()=>{handleShowSearchPageChange(true)}}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                                    <NavLink to='/shoping-bag' className='text-black ml-[2%] flex items-center justify-center relative navmid:hidden '>
                                    <ion-icon  class="text-[200%]" name="bag-outline"></ion-icon>
                                                <div className=' text-[90%] w-full h-full flex  items-center pt-[15%] phone:pt-[10%] justify-center absolute'>
                                                {sbList.size}
                                                </div>
                                    </NavLink>
                             </div>
                              <div className='hidden w-[50%] navmid:block'>
                              <SearchBar></SearchBar>
                              </div>
                              <div className='w-[32%]  navmid:flex hidden  items-center justify-center'>
                                            <NavLink className={({isActive})=>( isActive ? ' font-semibold':'' )+' ml-[5%]'} to={'/'}>Home</NavLink>     
                                            <button onMouseOver={()=>setShowMoreMouseOver(true)} onMouseLeave={()=>setShowMoreMouseOver(false)} onClick={()=>{setShowMore(p=>!p)}}  className='ml-[8%]'>Discover</button>
                                            <NavLink className={({isActive})=>( isActive ? ' font-semibold':'' )+'  ml-[8%]'}  to={'/store'}>Store</NavLink>
                                            <NavLink to='/shoping-bag' className='text-black ml-[5%] relative flex flex-col items-center justify-center w-[10%]'>
                                            <ion-icon  class="text-[200%]" name="bag-outline"></ion-icon>
                                                <div className=' text-[90%] w-full h-full flex items-center pt-[20%] justify-center absolute'>
                                                {sbList.size}
                                                </div>
                                            </NavLink>
                              </div>

                     </div>
                     <div className='navmid:hidden hidden  my-[2%] items-center justify-start'>
                                            
                                            <NavLink className=' mr-[5%] ' to={'/'}>Home</NavLink>
                                            <NavLink className=' mr-[5%] '  to={'/store'}>Store</NavLink>
                                            <NavLink to='/shoping-bag' className=' mr-[10%] text-black relative  w-[20%]'>
                                                <div className=' mr-[5%]   w-full h-full text-[80%] border-black border-[1px] px-[2%] flex items-center justify-center'>
                                                {sbList.size}
                                                </div>
                                            </NavLink>
                    </div>
                </div>
                <Discover setShowMoreMouseOver={setShowMoreMouseOver}  showMore={showMore} setShowMore={setShowMore}></Discover>
          
           </div>

           <div>

           </div>

        </div>
    
        {
        /*
         old design
         <div ref={navRef} className={`   hidden phone:block bg-p1 text-black  transition-all duration-[500ms]   top-0  z-[10] py-[.7%] `}>
            <div className=' relative px-[2%] flex flex-row w-full items-center justify-center '>
                        <div className=' w-[20%] flex justify-end items-center'>
                            <label htmlFor="" className=' font-bold text-[110%] px-[5%] p-[1%]'>
                                       NordStorm
                            </label>
                        </div>
                        <div className='w-[60%]'>        
                                        <nav className='flex flex-row justify-evenly h-full items-center'>
                                    
                                            <NavLink to={'/'}>Home</NavLink>
                                            <NavLink  to={'/store'}>Store</NavLink>
                                            <NavLink className='  flex items-center justify-center h-full' onMouseLeave={()=>setShowMore(false)} onMouseOver={()=>setShowMore(true)} to={'/store/new'}>New</NavLink>
                                    
                                        </nav>


                        </div>
                         <div className='w-[20%] flex flex-row justify-center items-center'>
                                    <NavLink to='/shoping-bag' className='text-black mr-[5%] relative '>
                                          <FontAwesomeIcon size="lg" icon={faHeart} />
                                    </NavLink>
                                    <NavLink to='/shoping-bag' className='text-black  relative  w-[20%]'>
                                         <div className='  w-full h-full text-[80%] border-black border-[1px] px-[2%] flex items-center justify-center'>
                                          {sbList.size}
                                         </div>
                                    </NavLink>
                         </div>
            </div>

        </div> */}

 



        {/* <div className=' sticky top-0 bg-light2 text-[150%] z-[20] w-full phone:hidden'>
                 <div className='flex flex-row justify-between px-[5%] py-[5%] w-full '>
                       <div onClick={()=>handleSideShowChange(!showSide)}>
                            <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                       </div>
                       <div className=' w-[20%] flex justify-evenly'>                 
                          <NavLink className='flex items-center justify-center' to='/shoping-bag'>
                                <FontAwesomeIcon size="sm" icon={faHeart} />
                          </NavLink>
                       </div>
                 </div>
        </div> */}

     
        <div className={` ${showSide ? '':' translate-x-[-100%]'} transition-all sc overflow-y-scroll duration-100 navmid:hidden fixed h-full w-[100%] flex flex-row z-20`}>
            <div className=' w-[60%] bg-p1 text-black  min-h-full flex flex-col'>
                
                 <div className=' flex justify-between flex-row p-[2%] mt-[2%]'>
                    <div className=' border-black border-[1px] w-full p-[1%] text-black text-center'>NORDSTROM</div>
                    <button onClick={()=>handleSideShowChange(false)} className='flex p-[1%] items-center justify-center text-[180%] text-black'>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                 </div>

                 <div className="flex flex-col mt-[10%] bg-p1 p-[2%] pb-[10%]  border-b-[1px] border-black text-[130%]">
                      {sideBarLinks.map(l=>
                        <SideBarLink key={l.dist}  handleSideShowChange={handleSideShowChange} l={l} />
                      )}                        
                 </div>

                 <div className="flex flex-col mt-[10%] bg-p1 p-[2%] pb-[20%]   text-[130%]">
                      {sideBarBottomLinks.map(l=>
                        <SideBarLink key={l.dist}  handleSideShowChange={handleSideShowChange} l={l} />
                      )}                        
                 </div>

            </div>
            <div onClick={()=>handleSideShowChange(false)} className=' w-[60%] bg-black opacity-40 h-full'></div>
        </div>

    </>
  )
}


const SideBarLink = ({handleSideShowChange,l=null})=>{
    return(<>
                        <NavLink onClick={()=>handleSideShowChange(false)} className={({isActive})=>( isActive ? 'bg-light2 text-black':'' )+` transition-all p-[1%] rounded-sm duration-200 flex flex-row items-center`} 
                         to={`/${l.dist}`}>
                            {l.icon&&<ion-icon name={l.icon}></ion-icon>}
                            <span className={` ${ !l.icon ? 'ml-[2%]':'ml-[5%]'} capitalize`}>{l.name}</span>
                        </NavLink>   
          </>)
}

export default NavBar