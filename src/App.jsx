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
import { WishlistContext,setWishlistContext,handleWishlistChangeContext } from './contexts/cartContext'
import Product from './pages/Product'
import WishList from './pages/WishList'


function App() {
  const [wishlist,setWishlist] = useState(
   new Set(JSON.parse(localStorage.getItem("wishlist")) || [])
  )
  const handleWishlistEdit = (id)=>{        
      if(wishlist.has(id)){
             let nextWishList = new Set(Array.from(wishlist).filter(i => i !== id))
             console.log(nextWishList)
             setWishlist(nextWishList)
             localStorage.setItem('wishlist',JSON.stringify(Array.from(nextWishList)))
             return 
            }
      let nextWishList = new Set(Array.from(wishlist))
      nextWishList.add(id)
      setWishlist(nextWishList)
      localStorage.setItem('wishlist',JSON.stringify(Array.from(nextWishList)))
  }
  return (
     <>
     <div className=' bg-light2'>
      <WishlistContext.Provider value={wishlist}>
            <setWishlistContext.Provider value={setWishlist}>
                  <handleWishlistChangeContext.Provider value={handleWishlistEdit}>
                              <NavBar></NavBar>
                              <Routes>
                              <Route path='/' element={<Home/>}></Route>
                              <Route path='/store' element={<Store />}></Route>
                              <Route path='/product/:id' element={<Product/>}></Route>
                              </Routes>
                              <Footer></Footer>
                  </handleWishlistChangeContext.Provider>
            </setWishlistContext.Provider>
      </WishlistContext.Provider>
     </div>
     </>
  )
}

export default App