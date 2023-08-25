import React from 'react';
import HeaderBottom from './HeaderBottom';

function Header() {
  return (
    <>
            
            
            <div
            className='w-full  bg-p1  flex phone:px-[10%] flex-row'>
                <div className='w-[50%] phone:flex text-black hidden items-center  font-Lato  '>
                    <div className='flex flex-col'>
                        <span className='p-0 font-bold m-0 text-[100%] phone:text-[150%] capitalize'>women's</span>
                        <span className='p-0 font-bold m-0 text-[100%] phone:text-[150%] capitalize translate-y-[-20%]'>collection</span>
                        <p className='w-[100%]'>From t-shirt,jeans jacket,shirt,watches,bags,sunglasses</p>
                        <button className=' self-start bg-black text-white p-[2%] mt-[5%] rounded-sm'>SHOP NOW</button>
                    </div>
                </div>
                
                <div className=' w-[100%] relative phone:w-[50%] flex flex-col phone:flex-row justify-end '>

                    <img className='h-[100%]' src="https://img.freepik.com/free-photo/portrait-young-beautiful-hipster-bad-girl-trendy-red-hoodie-earring-her-nose-positive-model-having-fun-shows-tongue_158538-15460.jpg" alt="" />
                </div>

            </div>

   
          <HeaderBottom/>



    </>
  );
}

export default Header;
