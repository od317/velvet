import React from 'react'
import './styles/main.css'
function SimDiv() {
  return (
    <div className='flex flex-row  phone:px-[2%] mt-[5%] mb-[5%]'>
    <div  style={{backgroundImage:'url(https://cdn.smartnordstrom.com/s3/csp/1683551772900/UNI_TNF_Disc_804x200_disc.jpg)'}} className=' w-[60%]  phone:w-[50%] imgBack flex flex-row'>
    </div>
    <div className='  w-[40%] px-[.7%] phone:px-[0%] phone:w-[50%] text-center phone:py-[4%] py-[3%] bg-black text-white flex flex-col items-center justify-center '>
          <label className=' font-semibold text-[90%] phone:text-[115%]' htmlFor="">  The North Face </label>
          <label className='border-b-[1px] box border-white text-[90%] mt-[1%]' htmlFor="">Shop Now</label>

    </div>
</div>
  )
}
export default SimDiv