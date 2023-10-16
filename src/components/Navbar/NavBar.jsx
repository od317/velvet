import React from 'react'
import { useState,useRef,useContext,useEffect } from 'react'
import { SbContext} from '../../contexts/cartContext'
import {Routes,Route,NavLink, BrowserRouter, useLocation} from 'react-router-dom'
import TopNav from './TopNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './styles/navbar.css'

function NavBar() {
    const sbList = useContext(SbContext)
    const [dropDownImgNum,setDropDownImgNum] = useState(0)
    const [searchBar,setSearchBar] = useState(false)
    const [searchq,setSearchq] = useState('')
    const [curScroll,setCurScroll] = useState(0)
    const [show,setShow] = useState(true)
    const [showMore,setShowMore] = useState(false)
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
        {
            name:'new',
            dist:'new',
            icon:'planet-outline'
        },
    ]
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

   const handleSideShowChange = (value)=>{
    setShowSide(value)
    if(value){
        console.log('ok')
        document.querySelector('body').style.overflowY='hidden'
    }else 
      document.querySelector('body').style.overflowY='visible'
   }
    return (<>
    
        <div className='flex flex-col pb-[1%]'>
 
            <div className='text-center text-[110%] py-[2%] px-[5%] phone:px-[0%] navmid:text-[100%] text-white bg-black navmid:py-[.6%]'>
                 <span className=' font-semibold mr-[.1%]'>Earn 5X the points on beauty!</span> 
                 A Nordy Club exclusive
            </div>

           <div className='w-full px-[5%] ms:px-[2%] relative pt-[2%]'>
                <div className='w-full flex flex-col navmid:border-b-[1px]  border-gray3 pb-[1.2%]'>
                     <div className='flex flex-col  navmid:px-[0%] navmid:flex-row navmid:justify-between w-full'>
                             <div className='flex navmid:w-[20%] flex-row mb-[2%] navmid:mb-[0%] navmid:flex'>
                                    <div className='navmid:hidden flex items-center justify-start w-[8%]' onClick={()=>handleSideShowChange(!showSide)}>
                                        <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
                                    </div>
                                    <div  className='flex-grow flex'>
                                        <NavLink style={{backgroundImage:'url()'}} className='   navmid:w-full  flex items-center justify-start h-full font-semibold  text-[120%] navmid:text-[180%]' to={'/'}>
                                            <img className='navmid:w-[75%]' src="https://n.nordstrommedia.com/alias/nordstrom-logo.svg" alt="" />
                                        </NavLink>
                                    </div>
                                    <NavLink to='/shoping-bag' className='text-black ml-[10%] flex items-center justify-center relative navmid:hidden  w-[10%]'>
                                    <ion-icon  class="text-[200%]" name="bag-outline"></ion-icon>
                                                <div className=' text-[90%] w-full h-full flex items-center pt-[15%] phone:pt-[10%] justify-center absolute'>
                                                {sbList.size}
                                                </div>
                                    </NavLink>
                             </div>
                              
                              <div className='navmid:w-[46%] navmid:ml-[2%] flex items-center border-[1px] px-[2%] navmid:px-[0%] py-[2%] border-gray3 navmid:py-[.5%]'>
                                  <form className='w-full text-[125%] px-[2%] ms:px-[0%] navmid:text-[100%]' action="">
                                    <button className='w-[8%] mr-[2%]' type='submit'>
                                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </button>
                                        <input placeholder='search for product or brand' className='w-[90%]' type="text" name="" id="" />
                                  </form>
                              </div>
 
                              <div className='w-[32%] navmid:flex hidden  items-center justify-end'>
                                            
                                            <NavLink className='ml-[10%]' to={'/'}>Home</NavLink>
                                            <NavLink className='ml-[10%]'  to={'/store'}>Store</NavLink>
                                            <label  className=' ml-[10%] flex items-center justify-center h-full'>sign in</label>
                                            <NavLink to='/shoping-bag' className='text-black ml-[10%] relative flex flex-col items-center justify-center w-[10%]'>
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
                                            <label  className=' mr-[5%]   flex items-center justify-center h-full'>sign in</label>
                                            <NavLink to='/shoping-bag' className=' mr-[10%] text-black relative  w-[20%]'>
                                                <div className=' mr-[5%]   w-full h-full text-[80%] border-black border-[1px] px-[2%] flex items-center justify-center'>
                                                {sbList.size}
                                                </div>
                                            </NavLink>
                    </div>
                </div>
                
                
                {/* 
                new hover
                <div onMouseLeave={()=>setShowMore(false)} onMouseOver={()=>setShowMore(true)} className={`${showMore ? '  inline-block':'hidden'}  w-full absolute bg-p1 z-10 flex flex-row `} >
                                                <div className='flex flex-row w-[50%] p-[5%]'>
                                                      <div onClick={()=> setShowMore(false)} className=" flex flex-col ">
                                                        <label className=' font-bold text-[110%] ' htmlFor="">osama</label>
                                                        <NavLink to={'/store'}>
                                                            <label className=' cursor-pointer' onMouseLeave={()=> setDropDownImgNum(0)} onMouseOver={()=> setDropDownImgNum(1)} htmlFor="">T-shirt</label>
                                                        </NavLink>
                                                        <NavLink to={'/store'}>
                                                            <label className=' cursor-pointer' onMouseLeave={()=> setDropDownImgNum(0)} onMouseOver={()=> setDropDownImgNum(2)} htmlFor="">shirt</label>
                                                        </NavLink>
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
                </div> */}
          
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

     
        <div className={` ${showSide ? '':' translate-x-[-100%]'} transition-all duration-100 navmid:hidden absolute h-full w-[100%] flex flex-row z-20`}>
            <div className=' w-[45%] bg-p1 text-black p-[2%] h-full flex flex-col'>
                
                 <div className=' flex justify-between flex-row mt-[2%]'>
                    <div className=' border-black border-[1px] p-[1%] text-black text-center'>NORDSTROM</div>
                    <button onClick={()=>handleSideShowChange(false)} className='flex p-[1%] items-center justify-center text-[180%] text-black'>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                 </div>

                 <div className="grid grid-cols-1 gap-y-[10%] mt-[10%] pb-[20%] border-b-[1px] border-black text-[130%]">
                      {sideBarLinks.map(l=>
                        <SideBarLink key={l.dist}  handleSideShowChange={handleSideShowChange} l={l} />
                      )}                        
                 </div>

            </div>
            <div onClick={()=>handleSideShowChange(false)} className=' w-[60%] h-full'></div>
        </div>

    </>
  )
}


const SideBarLink = ({handleSideShowChange,l})=>{
    return(<>
                        <NavLink onClick={()=>handleSideShowChange(false)} className={({isActive})=>( isActive ? 'bg-light2 text-black':'' )+` transition-all p-[1%] rounded-sm duration-200 flex flex-row items-center`} to={`/${l.dist}`}>
                            <ion-icon name={l.icon}></ion-icon>
                            <span className="ml-[5%] capitalize">{l.name}</span>
                        </NavLink>   
          </>)
}

export default NavBar