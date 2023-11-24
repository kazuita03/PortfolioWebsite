import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link} from 'react-router-dom'

import './Hero.css'

const Hero = () => {
  return (
    <div className = 'hero'>
        <div className='content'>
            <h1>"Life is here for us to become kinder"</h1>
            <p className='author'> - Shoko Makinohara</p>
        </div>
    </div>
  )
}

export default Hero