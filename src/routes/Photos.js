import React from 'react'
import { Card } from '../assets/card/Card'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Photos = () => {
  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col'>
          <Card 
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Photos