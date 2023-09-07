// import React, { useContext } from 'react'
// import { WishlistContext,setWishlistContext,handleWishlistChangeContext} from '../../contexts/cartContext'
// import items from '../../Data/items'
// function WishlistLayout() {
//   const wishlist = useContext(WishlistContext)
//   const setWishlist = useContext(setWishlistContext)
//   const handleWishlistChange = useContext(handleWishlistChangeContext)
//   const wishlistContent = items
//   return (
//     <div className='grid gap-y-[1%] pt-[5%] pb-[30%] pl-[2%]'>
//            {wishlistContent.map(w=>{
//             if (wishlist.has(w.id))
//             return(
//                  <div key={w.id} className='flex flex-row'>
//                       <div style={{backgroundImage:`url(${w.img})`}} className='pb-[40%] imgBack w-[40%]'></div>
//                       <div className=' w-[60%] h-full px-[2%] flex flex-col justify-between  '>
//                         <div className='flex-grow flex flex-col justify-center'>
//                             <label className='text-[150%]' htmlFor="">{w.name}</label>
//                             <label htmlFor="">{w.price}$</label>
//                         </div>
//                         <div className='flex flex-row  w-full justify-between '>
//                          <button onClick={()=> handleWishlistChange(w.id)} className='text-center p-[3%] border-black border-[1px] w-[47%]'>remove</button>
//                          <button className='text-center p-[3%] bg-light1 border-light1 border-[1px] text-white w-[47%]'>add to cart</button>
//                         </div>
//                       </div>
//                  </div>
//             )
//             return 
//            })}
//     </div>
//   )
// }

// export default WishlistLayout




// import React from 'react'
// import WishlistLayout from '../components/Wishlist/WishlistLayout'

// function WishList() {
//   return (
//     <div>
//         <WishlistLayout></WishlistLayout>
//     </div>
//   )
// }

// export default WishList