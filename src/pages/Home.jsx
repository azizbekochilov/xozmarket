import React from 'react'
import Layout from './Layout'
import Karusel from '../components/Karusel'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Menu/>
        <Karusel/>
        <Footer/>
    </div>
  )
}

export default Home