import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'


import kazuma from '../../assets/images/KazumaCutOut.png'

import './introduction.css'

const introduction = () => {
  return (
    <div className = 'introduction'>
      <div className = 'introContent'>
        <div className = 'introHeaderText'>
          <h1 className = 'ml-5'>Hi Hi! I'm Kazuma</h1>
        </div>

        <div className = 'introText'>
          <p className='ml-10'>
            I am currently a full time student at the University of Washington studying Informatics. 
            I am interested in working as a UX designer and a Software Engineer in hopes to create interfaces 
            that are more intuitive and user friends to all audiences. I'm open to any opportunity so feel 
            free to reach out to talk! Always happy to share my experiences! 
          </p>
        </div>
        <div className="connect-button">
          <button>Connect</button>
        </div>
      </div>
    </div>
  )
}

export default introduction