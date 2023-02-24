import React from 'react'
import Footer from '../components/Footer'
import Karusel from '../components/Karusel'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import HomeAd from '../components/HomeAd'

const Home = () => {
  return (
    <div>
    <Navbar />
    <Menu/>
    <Karusel/>
    <HomeAd/>
    <Footer />
    </div>
  )
}

export default Home