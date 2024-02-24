import React from 'react'
import './styles/main.css'
import SimDiv from './SimDiv'
import MainSlider from './MainSlider'
import SecSlider from './SecSlider'
import Bslide from '../Sliders/Bslide'
function Header() {
  return (
    <>
            <div className=' navmidpt-[5%] phone:pt-[0%]   ms:px-[2%]'>
            <SimDiv/>
            <MainSlider/>
            <Bslide text={'fall picks for you'} items={['t1','t2','t3','t4','t5','t6','t7','t8','t9','t10','t11','t12','t13','t14']} num={5}></Bslide>
            <SecSlider/>
            </div>
    </>
  );
}

export default Header
