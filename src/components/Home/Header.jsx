import React from 'react'
import './styles/main.css'
import SimDiv from './SimDiv'
import MainSlider from './MainSlider'
import SecSlider from './SecSlider'
import Bslide from '../Sliders/Bslide'
function Header() {
  return (
    <>
            <div className=' pt-[5%] phone:pt-[0%]   ms:px-[2%]'>
            <SimDiv/>
            <MainSlider/>
            <Bslide text={'fall picks for you'} items={['t1','t2','t3','t4','t5','t6','t7']} num={5}></Bslide>
            <SecSlider/>
            </div>
            {/* 
            old design
            <div
            className='w-full  bg-p1  flex phone:px-[10%] flex-row'>
                <div className='w-[50%] phone:flex text-black hidden items-center  font-Lato  '>
                    <div className='flex flex-col'>
                        <span className='p-0 font-bold m-0 text-[100%] phone:text-[150%] capitalize'>women's</span>
                        <span className='p-0 font-bold m-0 text-[100%] phone:text-[150%] capitalize translate-y-[-20%]'>collection</span>
                        <p className=' phone:w-[100%]'>From t-shirt,jeans jacket,shirt,watches,bags,sunglasses</p>
                        <button className=' self-start bg-black text-white p-[2%] mt-[5%] rounded-sm'>SHOP NOW</button>
                    </div>
                </div>
                
                <div className=' w-[100%] pb-[70%] phone:pb-[38%] phone:w-[50%] relative  '>

                    <img className='h-[100%] w-full absolute' src="https://img.freepik.com/free-photo/portrait-young-beautiful-hipster-bad-girl-trendy-red-hoodie-earring-her-nose-positive-model-having-fun-shows-tongue_158538-15460.jpg" alt="" />
           
                </div>

            </div>

   
          <HeaderBottom/> */}



    </>
  );
}

export default Header
