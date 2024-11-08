import React from 'react'
import './home.styles.scss'
import Cover from '../../cover/Cover'
import Vision from '../../vision/Vision'
import News from '../../vision/news/News'
import Footer from '../../footer/Footer'
const Home = () => {
  return (
    <div className='app-container' >
      <Cover />
      <Vision />
      <News/>
      <Footer />
    </div>
  )
}

export default Home
