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

import React, { useState } from 'react'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Fotter/Fotter'
import Home from './pages/Home'
import Store from './pages/Store'
import WishList from './pages/Wishlist'
import { SbContext,setSbContext,setWishlistContext,handleSbSflChangeContext,handleSbChangeContext } from './contexts/cartContext'
import Product from './pages/Product'
function App() {
  const [wishlist,setWishlist] = useState(
   new Set(JSON.parse(localStorage.getItem("wishlist")) || [])
  )
  const [sb,setSb] = useState(
      new Set(JSON.parse(localStorage.getItem("sb")) || [])
  )
  const [sfl,setSfl] = useState(
      new Set(JSON.parse(localStorage.getItem("sfl")) || [])
  )


  const handleSbEdit = (pro)=>{     
      if(sb.has(pro)){
             let nextSb = new Set(Array.from(sb).filter(i => i!== pro))
             setSb(nextSb)
             localStorage.setItem('sb',JSON.stringify(Array.from(nextSb)))
             return 
            }
      let nextSb = new Set(sb)
      nextSb.add(pro)
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

  return (
     <>
     <div className=' bg-light2 flex justify-between flex-col min-h-screen'>
      <SbContext.Provider value={sb}>
            <setSbContext.Provider value={setSb}>
                                    <handleSbChangeContext.Provider value={handleSbEdit}>
                                        <handleSbSflChangeContext.Provider value={handleSbSflChange}>
                                                <NavBar></NavBar>
                                                <Routes>
                                                <Route path='/' element={<Home/>}></Route>
                                                <Route path='/store' element={<Store />}></Route>
                                                <Route path='/product/:id' element={<Product/>}></Route>
                                                <Route path='/shoping-bag' element={<WishList/>}></Route>
                                                </Routes>
                                                <Footer></Footer>
                                        </handleSbSflChangeContext.Provider>
                                    </handleSbChangeContext.Provider>
            </setSbContext.Provider>
      </SbContext.Provider>
     </div>
     </>
  )
}

export default App