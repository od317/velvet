import React from 'react';
import './styles/productLayout.css'
function ProductLayout({product}) {
  return (
    <div className='text-black'>
        <div style={{backgroundImage:`url(${product.img})`}} className='pb-[100%] imgBack relative w-full'>
        </div>
    </div>
  );
}

export default ProductLayout;
