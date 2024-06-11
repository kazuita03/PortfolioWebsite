import React from 'react'
import { Card } from '../assets/card/Card'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PhotoDisp from '../components/photoDisp/PhotoDisp'

const Photos = () => {
  return (
    <div>
      <Navbar />
      <PhotoDisp />
      <Footer />
    </div>
  )
}

export default Photos