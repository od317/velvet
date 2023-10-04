import React from 'react'
import RightCard from './RightCard'

function RightSide({product}) {
  const content = product.simList.slice(0,3)
  return (
    <div className='hidden ms:grid  h-fit pl-[2%] w-[11%] grid-cols-1'>
                <div className=' font-semibold mb-[10%] text-center'>
                You Might Also Like
                </div>
                {content.map((p,index)=>{
                    return(
                      <div key={p}>
                         <RightCard id={p}></RightCard>
                      </div>
                    )
                })}
    </div>
  )
}

export default RightSide
