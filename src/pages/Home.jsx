import React from 'react'
import { useEffect } from 'react'
import Grid from '../components/Home/Grid'
import Header from '../components/Home/Header'
import {Routes,Route,Link, BrowserRouter, useLocation} from 'react-router-dom'
import Bttb from '../components/Home/Bttb'
import SimDiv2 from '../components/Home/SimDiv2'
import SecSlider2 from '../components/Home/SecSlider2'
import Bslide from '../components/Sliders/Bslide'
import Sbc from '../components/Home/Sbc'
import {Helmet} from "react-helmet"
import Sbcsmall from '../components/Home/Sbcsmall'
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
     <>
      <Helmet>
            <title>NordeStrom Home</title>
      </Helmet>

     <div className='bg-p1 mb-[10%]'>
      <Bttb></Bttb>
      <Sbcsmall></Sbcsmall>
      <Header></Header>
      <Grid></Grid>
      <SimDiv2></SimDiv2>
      <SecSlider2></SecSlider2>
      <Sbc></Sbc>
      <div className='phone:px-[2%]'>
         <Bslide text={'fall picks for you'} items={['t20','t21','t22','t23','t24','t25','t26','t27','t28','t29','t30','t31','t32']} num={5}></Bslide>
      </div>
     </div>
     </>
  )
}

export default Home