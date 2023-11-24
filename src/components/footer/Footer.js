import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-icons">
                    <a href="https://www.instagram.com/kazum_03" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={32} /> kazum_03
                    </a>
                    <a href="https://www.linkedin.com/in/kazita03" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} /> kazita03
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer