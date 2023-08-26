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
import { WishlistContext,setWishlistContext } from './contexts/cartContext'

function App() {
  const [wishlist,setWishlist] = useState(
   JSON.parse(localStorage.getItem("wishlist")) || ['s']
  )
  return (
     <>
     <WishlistContext.Provider value={wishlist}>
         <setWishlistContext.Provider value={setWishlist}>
               <NavBar></NavBar>
               <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/store' element={<Store />}></Route>
               </Routes>
               <Footer></Footer>
         </setWishlistContext.Provider>
     </WishlistContext.Provider>
     </>
  )
}

export default App