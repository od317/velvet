import React, { useState } from 'react';

function ImageLoader({img}) {
  const [show,setShow] = useState(false)
  return (
    <div
    style={{backgroundImage:`url()`}} 
    className='h-full imgBack bg-gray4'>
         <img onLoad={()=>{
          setShow(true)
          console.log('ok')
         }} src={img} className={`${show ? '':'hidden'}`} alt="" />
        <div className={` ${show ? 'hidden': '' } w-full h-full pb-[130%] bg-gray4`}>

        </div>


    </div>
  );
}

export default ImageLoader;
