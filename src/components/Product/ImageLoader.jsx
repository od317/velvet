import React, { useState } from 'react';

function ImageLoader({img,allshow,handleAllShow}) {
  const [show,setShow] = useState(false)
  return (
    <div
    style={{backgroundImage:`url()`}} 
    className='h-full imgBack bg-gray4'>
       
         <img onLoad={()=>{
          setShow(true)
          handleAllShow(true)
         }} src={img} className={`${show || allshow ? '':'hidden'}`} alt="" />

        <div className={` ${show || allshow ? 'hidden': '' } w-full h-full pb-[130%] bg-gray4`}>

        </div>


    </div>
  )
}

export default ImageLoader;
