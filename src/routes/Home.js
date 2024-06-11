import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Introduction from '../components/introduction/Introduction'
import Experience from '../components/experience/Experience'
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Introduction/>
        <Experience/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home