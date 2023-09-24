import React from 'react';

function RightSide({product}) {
  return (
    <div className='hidden ms:grid  h-fit pl-[2%] w-[11%] grid-cols-1'>
                <div className=' font-semibold mb-[10%] text-center'>
                You Might Also Like
                </div>
                {product.img[0].imgs.map((image,index)=>{
                    return(<div key={image} className=' w-full h-fit mb-[35%]'>
                                <div 
                                style={{backgroundImage:`url(${image})`}}
                                className='w-full pb-[150%] imgBack'>
                                </div>
                                <div className='grid grid-cols-1 text-center text-[90%]'>
                                    <label htmlFor="">{product.brand}</label>
                                    <label className=' font-semibold' htmlFor="">${product.price}</label>
                                </div>
                        </div>)
                })}
    </div>
  );
}

export default RightSide;
