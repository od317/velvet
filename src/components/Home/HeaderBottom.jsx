import React from 'react'
import truck from '../../assets/icons8-truck-50.png'
import box from '../../assets/icons8-box-50.png'
import pay from '../../assets/icons8-payment-50.png'

function HeaderBottom() {
  return (
    <>
    <div className='hidden phone:flex flex-row px-[10%]  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>

        <div className='w-[33.3%] pb-[1%] flex items-center justify-center '>
          <img className='w-[14%] mr-[5%]' src={truck} alt="" />
          <div className='flex flex-col w-[40%]'>
            <div className='font-bold text-[90%]'>Free Shiping</div>
            <div className='text-[80%]'>Free Shiping on all us order or 200$ order</div>
          </div>
        </div>
        <div className='w-[33.3%]   flex items-center justify-center border-p1 border-l-[1px] border-r-[1px]'>
        <img className='w-[14%] mr-[5%]' src={box} alt="" />
          <div className='flex flex-col w-[40%]'>
            <div className='font-bold text-[90%]'>Free Shiping</div>
            <div className='text-[80%]'>Free Shiping on all us order or 200$ order</div>
          </div>
        </div>
        <div className='w-[33.3%]   flex items-center justify-center'>
        <img className='w-[15%] mr-[5%]' src={pay} alt="" />
          <div className='flex flex-col w-[40%]'>
            <div className='font-bold text-[90%]'>Free Shiping</div>
            <div className='text-[80%]'>Free Shiping on all us order or 200$ order</div>
          </div>
        </div>


    </div>
    </> 
 )
}

export default HeaderBottom