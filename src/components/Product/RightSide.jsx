import React from 'react';
import RightCard from './RightCard';

function RightSide({product}) {
  return (
    <div className='hidden ms:grid  h-fit pl-[2%] w-[11%] grid-cols-1'>
                <div className=' font-semibold mb-[10%] text-center'>
                You Might Also Like
                </div>
                {product.simList.map((p,index)=>{
                    return(
                      <RightCard id={p}></RightCard>
                    )
                })}
    </div>
  );
}

export default RightSide;
