import React from 'react';

function Bottom() {
  return (
    <>
      <div className='mt-[5%]'>
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
    <div className='w-full h-[30rem]'></div>
    </>
  )
}

export default Bottom;
