// import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
// import BookLayout from './BookLayout'
// import Book from './pages/Book'
// import BookList from './pages/BookList'
// import Home from './pages/Home'
// import NewBook from './pages/NewBook'
// import NotFound from './pages/NotFound'
// import BookRoutes from './BookRoutes'

// export default function App(){
//     const state = useLocation().state
//     return(<>
        
//             <div className='flex gap-[5%]'>
//                 <Link state={'hi'} to={'/'}>Home</Link>
//                 <Link to={'/books'}>BookList</Link>
//                 {state}
//             </div>

//             <Routes>

//                     <Route path='/' element={<Home/>}/>
                    
//                     <Route path='/books/*' element={<BookRoutes></BookRoutes>}/>
                    
//                     <Route path={'*'} element={<NotFound></NotFound>}></Route>

//             </Routes>

//     </>)
// }

import React, { useState,useEffect} from 'react'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Fotter/Fotter'
import Home from './pages/Home'
import Store from './pages/Store'
import WishList from './pages/Wishlist'
import { SbContext,setSbContext,setWishlistContext,WindowWidth,handleSbSflChangeContext,handleSbChangeContext } from './contexts/cartContext'
import Product from './pages/Product'
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [sb,setSb] = useState(
      new Set(JSON.parse(localStorage.getItem("sb")) || [])
  )


  const handleSbEdit = (pro)=>{ 
        
        if(sb.has(`${pro}-sb`)||sb.has(`${pro}-sfl`)){
             let nextSb = new Set(Array.from(sb).filter(i => i!== `${pro}-sb`).filter(i=>i!== `${pro}-sfl`))
             setSb(nextSb)
             localStorage.setItem('sb',JSON.stringify(Array.from(nextSb)))
             return 
            }
      let nextSb = new Set(sb)
      nextSb.add(`${pro}-sb`)
      setSb(nextSb)
      localStorage.setItem('sb',JSON.stringify(Array.from(nextSb)))        
  }
  const handleSbSflChange = (id)=>{     
            let nextSb = []
            let cur = id.split('-')
            if(cur[cur.length-1] == 'sb'){
                nextSb = new Set(Array.from(sb).map(i => {
                if(id === i){
                    return id.substring(0,id.length-2)+'sfl'
                }
                return i
            }))
           }
           else{
            nextSb = new Set(Array.from(sb).map(i => {
                if(id === i){
                    return id.substring(0,id.length-3)+'sb'
                }
                return i
            }))
           }
           setSb(nextSb)
           localStorage.setItem('sb',JSON.stringify(Array.from(nextSb)))
           return 
  }

  useEffect(()=>{
    const handleWindowResize = ()=>{
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return ()=>{
        window.removeEventListener('resize',handleWindowResize)
    }
  },[window.innerWidth])

  return (
     <>
     <div className=' bg-p1 flex justify-start  flex-col min-h-screen'>
      <SbContext.Provider value={sb}>
            <setSbContext.Provider value={setSb}>
                                    <handleSbChangeContext.Provider value={handleSbEdit}>
                                        <handleSbSflChangeContext.Provider value={handleSbSflChange}>
                                            <WindowWidth.Provider value={windowWidth}>
                                                <div className='flex-grow'>
                                                    <NavBar></NavBar>
                                                    <Routes>
                                                    <Route path='/' element={<Home/>}></Route>
                                                    <Route path='/store' element={<Store />}></Route>
                                                    <Route path='/store/:id' element={<Store />}></Route>
                                                    <Route path='/product/:id' element={<Product/>}></Route>
                                                    <Route path='/shoping-bag' element={<WishList/>}></Route>
                                                    </Routes>
                                                </div>    
                                                <Footer></Footer>
                                            </WindowWidth.Provider>
                                        </handleSbSflChangeContext.Provider>
                                    </handleSbChangeContext.Provider>
            </setSbContext.Provider>
      </SbContext.Provider>
     </div>
     </>
  )
}

export default App