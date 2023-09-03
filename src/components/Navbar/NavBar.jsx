import React from 'react'
import { useState,useRef,useContext,useEffect } from 'react'
import { WishlistContext,setWishlistContext } from '../../contexts/cartContext'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import TopNav from './TopNav'
function NavBar() {
    const [dropDownImgNum,setDropDownImgNum] = useState(0)
    const [searchBar,setSearchBar] = useState(false)
    const [searchq,setSearchq] = useState('')
    const wishlist = useContext(WishlistContext)
    const setWishlist = useContext(setWishlistContext)
    const [curScroll,setCurScroll] = useState(0)
    const [show,setShow] = useState(true)
    const [showMore,setShowMore] = useState(false)
    const [showSide,setShowSide] = useState(false)
    const navRef = useRef(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleWindowResize = ()=>{
            setWindowWidth(window.innerWidth)
            if(window.innerWidth >= 450){
                 document.querySelector('body').style.overflowY='auto'
                 setShow(false)
            }
               
        }
        window.addEventListener('resize', handleWindowResize)
        return ()=>{
            window.removeEventListener('resize',handleWindowResize)
        }
    })

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
        }
        else{
            setShow(true)
        }
        setCurScroll(window.scrollY)
    }) 

   const handleSideShowChange = (value)=>{
    setShowSide(value)
    if(value)
      document.querySelector('body').style.overflowY='hidden'
    else 
      document.querySelector('body').style.overflowY='auto'
}
    
    return (<>
        <div ref={navRef} className={`   hidden phone:block bg-p1 text-black  transition-all duration-[500ms]   sticky top-0 z-[10] py-[.7%] `}>
            <div className=' relative flex flex-row justify-center '>
                        <div className='w-[25%] flex justify-end items-center'>
                            <label htmlFor="" className='border-[1px] border-black px-[5%] p-[1%]'>
                                       VELVET WOMAN'S WEARS 
                            </label>
                            </div>
                        <div className='w-[50%]'>        
                                        <nav className='flex flex-row justify-evenly h-full items-center'>
                                    
                                            <Link to={'/'}>Home</Link>
                                            <Link  to={'/store'}>Store</Link>
                                            <Link className='  flex items-center justify-center h-full' onMouseLeave={()=>setShowMore(false)} onMouseOver={()=>setShowMore(true)} to={'/store/new'}>New</Link>
                                    
                                        </nav>


                        </div>
                         <div className='w-[25%] flex flex-row justify-start items-center'>
                                    <form onMouseOver={()=> setSearchBar(true)} onMouseLeave={()=> setSearchBar(false)} action="" className=' text-black flex flex-row items-center justify-center w-[50%]'>
                                        <input onChange={(e)=>setSearchq(e.target.value)} className={` text-[100%] py-[.5%] outline-none border-b-[1px] border-black text-black bg-p1  ${(searchBar || searchq.length > 0) ? 'w-[80%]' :'w-[0]'} transition-all duration-200`}></input>
                                        <button >
                                        <ion-icon name="search"></ion-icon>
                                        </button>
                                    </form>
                                    <button className='text-[#f54242] text-[150%]'>
                                    <ion-icon name="heart"></ion-icon>
                                    {wishlist.length}
                                    </button>
                         </div>
            </div>
            <div onMouseLeave={()=>setShowMore(false)} onMouseOver={()=>setShowMore(true)} className={`${showMore ? '  inline-block':'hidden'}  w-full absolute bg-p1 flex flex-row `} >
                                                <div className='flex flex-row w-[50%] p-[5%]'>
                                                      <div onClick={()=> setShowMore(false)} className=" flex flex-col ">
                                                        <label className=' font-bold text-[110%] ' htmlFor="">osama</label>
                                                        <Link to={'store'}>
                                                            <label className=' cursor-pointer' onMouseLeave={()=> setDropDownImgNum(0)} onMouseOver={()=> setDropDownImgNum(1)} htmlFor="">T-shirt</label>
                                                        </Link>
                                                        <Link to={'store'}>
                                                            <label className=' cursor-pointer' onMouseLeave={()=> setDropDownImgNum(0)} onMouseOver={()=> setDropDownImgNum(2)} htmlFor="">shirt</label>
                                                        </Link>
                                                      </div>
                                                </div>

                                                <div className='flex flex-row w-[50%] h-full relative pb-[30%] '>
                                    
                                                     <div className={` ${dropDownImgNum == 1 ? '':'hidden'} flex absolute w-full h-full justify-center items-center`}>
                                                        <img className="w-[50%]" src="https://media.istockphoto.com/id/1286538907/photo/stylish-blonde-girl-wearing-black-t-shirt-and-glasses-posing-against-street-urban-clothing.jpg?s=612x612&w=0&k=20&c=4F9OrXj8iZa7V_7cmgQO3v3qYu_Ms8UiPayZXAin8z8=" alt="" />
                                                     </div>

                                                     <div className={` ${dropDownImgNum == 2 ? '':'hidden'} flex absolute w-full h-full justify-center items-center`}>
                                                        <img className="w-[50%]" src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_23/1445782/white-t-shirts-today-main-190607-001.jpg" alt="" />
                                                     </div>

                                                </div>
            </div>
        </div>

 



        <div className=' fixed  z-[20] w-full phone:hidden'>
                 <div className='flex flex-row justify-between px-[5%] py-[5%] w-full '>
                       <div onClick={()=>handleSideShowChange(!showSide)}>
                          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                       </div>
                       <div className=' w-[20%] flex justify-evenly'>
                          <ion-icon name="search-outline"></ion-icon>
                          <ion-icon name="heart-outline"></ion-icon>
                       </div>
                 </div>
        </div>

     
        <div className={` ${showSide ? '':' translate-x-[-100%]'} transition-all duration-100 phone:hidden fixed h-full w-[100%] flex flex-row z-20`}>
            <div className=' w-[60%] bg-light1 h-full flex flex-col'>
                 <div>Velevet</div>
            </div>
            <div onClick={()=>handleSideShowChange(false)} className=' w-[40%] h-full'></div>
        </div>

    </>
  )
}

export default NavBar