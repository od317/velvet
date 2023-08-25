import React from 'react'
import { useState,useRef,useContext } from 'react'
import { WishlistContext,setWishlistContext } from '../../contexts/cartContext'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import TopNav from './TopNav'
function NavBar() {
    
    const wishlist = useContext(WishlistContext)
    const setWishlist = useContext(setWishlistContext)
    const [curScroll,setCurScroll] = useState(0)
    const [show,setShow] = useState(true)

    const [storePop,setStorePop] = useState(false)
    const navRef = useRef(null)

    window.addEventListener('scroll',(e)=>{
        
        if (navRef.current === null)
            return 
        let t = navRef.current
        
        if(window.scrollY > 30){
            t.style.boxShadow = '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)'
        }
        else{
            t.style.boxShadow = 'none'
        }
        
        if (window.scrollY > curScroll){
            setShow(false)
        }
        else{
            setShow(true)
        }
        setCurScroll(window.scrollY)
    }) 

   
    
    return (<>
        <TopNav/>
        <div ref={navRef} className={` ${show? '':' translate-y-[-100%]'} hidden phone:block bg-light1 text-white  transition-all duration-[500ms] ease-out  sticky top-0 z-[10] py-[.5%] `}>
            <div className=' relative '>
                                
                        <nav className='flex flex-row justify-evenly items-center'>
                    
                            <Link to={'/'}>Home</Link>
                            <Link className='' onMouseLeave={()=>setStorePop(false)} onMouseOver={()=>setStorePop(true)} to={'/store'}>Store</Link>
                            <Link to={'/store/new'}>New</Link>
                    
                        </nav>

                    <div className={`${storePop ? '  inline-block':'hidden'} bg-black flex flex-row `} >
                        <div className='flex flex-row w-[50%]'>

                        </div>

                        <div className='flex flex-row w-[50%]'>
            
                        </div>
                    </div>

            </div>
        </div>

        <div className=' fixed  z-[20] w-full phone:hidden'>
                 <div className='flex flex-row justify-between px-[5%] py-[5%] w-full '>
                       <div>
                          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                       </div>
                       <div className=' w-[20%] flex justify-evenly'>
                          <ion-icon name="search-outline"></ion-icon>
                          <ion-icon name="heart-outline"></ion-icon>
                       </div>
                 </div>
        </div>

    </>
  )
}

export default NavBar