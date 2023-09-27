import React from 'react'
import { useEffect } from 'react'
import Grid from '../components/Home/Grid'
import Header from '../components/Home/Header'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import Bttb from '../components/Home/Bttb'
import SimDiv2 from '../components/Home/SimDiv2'
import SecSlider2 from '../components/Home/SecSlider2'
import Bslide from '../components/Sliders/Bslide'
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
     <>
     <div className='bg-p1 mb-[10%]'>
      <Bttb></Bttb>
      <Header></Header>
      <Grid></Grid>
      <SimDiv2></SimDiv2>
      <SecSlider2></SecSlider2>
      <div className='phone:px-[2%]'>
         <Bslide text={'fall picks for you'} items={['t1','t2','t3','t4','t5','t6','t7','t1','t2','t3','t4','t5','t6','t7']} num={5}></Bslide>
      </div>
     </div>
     </>
  )
}

export default Home