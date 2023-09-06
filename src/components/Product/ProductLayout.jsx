import React from 'react';
import './styles/productLayout.css'
import {WishlistContext,setWishlistContext,handleWishlistChangeContext} from '../../contexts/cartContext'
import { useContext } from 'react';

function ProductLayout({product}) {
  const handleWishlistChange = useContext(handleWishlistChangeContext)
  const sizes = [
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
  ]
  return (
    <div className='text-black mb-[1%]'>
      
        <div style={{backgroundImage:`url(${product.img})`}} className='pb-[150%] mb-[3%] imgBack relative w-full'>
            {/* product image */}            
        </div>
 
        <div className='flex flex-col px-[3%]'>
               
                <div className='flex flex-row justify-between '>
                    <label className='text-[110%] font-semibold' htmlFor="">{product.name}</label>
                    <label htmlFor="">{product.price}</label>
                </div>

               <div className='text-[120%] mb-[2%]'>
                  sizes
               </div>

                <div className='flex flex-row justify-between'>
                    <div className='w-[80%] flex '> 
                        {sizes.map(i=>{
                            if(product.size.has(i)){
                                return (
                                     <button key={i} className='pb-[13%] w-[13%] mr-[2%] border-black border-[1px] relative'>
                                        <div className=' absolute w-full h-full flex items-center justify-center'>
                                            {i}
                                        </div>   
                                     </button>)
                            }
                            return
                        })}
                    </div>
                    <div className='w-[10%]'>
                        <button onClick={()=> handleWishlistChange(product.id)} className='flex w-full h-full items-center justify-end '>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
                                <g transform="translate(0 -1028.4)">
                                  <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#e74c3c"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>


                <div className=' grid grid-cols-2 '>
                         
                </div>

        </div>

    
    </div>
  );
}

export default ProductLayout;
