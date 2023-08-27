import React from 'react'
import { Link } from 'react-router-dom';

import  './styles/bottom.css'

function Bottom() {
  return (
    <>
      <div className='mt-[5%] hidden phone:block'>
        <div className='flex flex-col font-bold capitalize px-[10%] text-center text-[200%]'>
                  <span>unleash your style</span>
                  <span>Embrace your fashion</span>
        </div>
        <div className='flex flex-row justify-center px-[10%] gap-[5%] p-[5%]'>
          <div className='w-[33.3%] '>

            <div className='pb-[80%] imgBg1 rounded-tl-[80px] bg-cover bg-center relative shadow-[15px_15px_0px_0px_#faa7ae]'>
            </div>
          </div>

          <div className='w-[33.3%] '>
            <div className='flex items-center justify-center mb-[1%] translate-y-[-30%]'>
              <button className='bg-gray text-text1 p-[2%]'>
                <Link to={'store'}>Shop Now</Link>
                </button>
            </div>
            <div className='pb-[80%] imgBg2 bg-cover bg-center shadow-[15px_15px_0px_0px_#a38dbc] relative' 
            >
            </div>
          </div>

          <div className='w-[33.3%] '>
            <div className='pb-[80%] imgBg3  relative bg-cover bg-center shadow-[15px_15px_0px_0px_#faa7ae]'>
            </div>
          </div>

        </div>
    </div>

    <div className='phone:hidden'>

          <div className='w-full grid grid-cols-2 phone:hidden px-[10%] mb-[10%] gap-[5%]'>
                
                  <div style={{backgroundPosition:'center',backgroundSize:'cover',background:`url('https://media.gettyimages.com/id/505729648/photo/fashion-model-pamina-wei%C3%A3-wearing-sabrina-weigt-dress-and-jacket-sunglasses-kerbholz-socks.jpg?s=612x612&w=gi&k=20&c=g9oIc8NL_qt9bi0hjF8TTxzqwOM1ieHCY6AWyQgJvOU=')`}}
                  className=' imgBack col-span-2 bg-cover bg-center pb-[100%]'>

                  </div>
                  
                  <div style={{backgroundPosition:'center',backgroundSize:'cover',background:`url('https://media.gettyimages.com/id/506927944/photo/fashion-student-jaime-lo-wears-a-dress-from-korea-acne-studio-jacket-dior-bag-topshop-hat-and.jpg?s=612x612&w=gi&k=20&c=LelsB0PKf-vV9RX1L-dZq575QbkBiHlC_Csdbv12ZOc=')`}}
                  className=' imgBack pb-[100%]'>

                  </div>
                  
                  <div style={{backgroundPosition:'center',backgroundSize:'cover',background:`url('https://i.pinimg.com/1200x/18/70/2c/18702c0361bb0bd0e917272d69dc6c77.jpg')`}}
                  className=' imgBack pb-[100%]'>


                  </div>

          </div>


           <div>
            
           </div>

    </div>
    </>
  )
}

export default Bottom;
