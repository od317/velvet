import React from 'react';

import  './bottom.css'

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

            <div className='pb-[80%] rounded-tl-[80px] bg-cover bg-center
              shadow-[15px_15px_0px_0px_#faa7ae]' style={{
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                background:`url('https://img.freepik.com/free-photo/positive-woman-stylish-outfit-moves-pink-background-pretty-woman-white-blouse-red-high-heels-is-smiling-camera_197531-18611.jpg?w=2000')`
                }}>
            </div>
          </div>

          <div className='w-[33.3%] '>
            <div className='flex items-center justify-center mb-[1%] translate-y-[-30%]'>
              <button className='bg-gray text-text1 p-[2%]'>Shop Now</button>
            </div>
            <div className='pb-[80%]  bg-cover bg-center
              shadow-[15px_15px_0px_0px_#a38dbc]' style={{
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                background:`url('https://img.freepik.com/free-photo/wonderful-young-woman-funny-dancing-with-sincere-smile-purple-background_197531-7067.jpg')`
                }}>
            </div>
          </div>

          <div className='w-[33.3%] '>
            <div className='pb-[80%]  rounded-tr-[80px] bg-cover bg-center
              shadow-[15px_15px_0px_0px_#faa7ae]' style={{
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                backgroundPosition:'center',
                background:`url('https://img.freepik.com/free-photo/curly-brunette-dancing-pink-background-portrait-girl-great-mood-warm-sweater-mom-jeans_197531-13499.jpg?w=2000')`
                }}>
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
