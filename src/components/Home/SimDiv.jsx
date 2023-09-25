import React from 'react'

function SimDiv() {
  return (
    <div className='flex flex-row   mt-[2%] mb-[5%]'>
    <div style={{backgroundImage:'url(https://tpc.googlesyndication.com/simgad/15721634154017957185)'}} className=' w-[60%] phone:w-[50%] imgBack flex flex-row'>

    </div>
    <div className='  w-[40%] px-[.7%] phone:px-[0%] phone:w-[50%] text-center phoen:py-[2.7%] py-[3%] bg-dark2 text-white flex flex-col items-center justify-center '>
          <label className=' font-semibold text-[90%] phone:text-[110%]' htmlFor="">  English Pear & Sweet Pea </label>
          <label className='hidden ms:block' htmlFor=""> A Brand-New Cologne from Jo Malone London</label>
          <label className='border-b-[1px] box border-white text-[85%] mt-[1%]' htmlFor="">Shop Now</label>

    </div>
</div>
  )
}

export default SimDiv