import React from 'react'
import Bottom from '../components/Home/Bottom'
import Grid from '../components/Home/Grid'
import GridContent from '../components/Home/GridContent'
import Header from '../components/Home/Header'

function Home() {
  return (
     <>
     <div className='bg-light2'>
      <Header></Header>
      <Grid></Grid>
      <Bottom></Bottom>
      <GridContent></GridContent>
     </div>
     </>
  )
}

export default Home