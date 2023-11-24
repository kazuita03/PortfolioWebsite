import React, {useState} from 'react'
import './Navbar.css'
import {GrMenu} from 'react-icons/gr'
import {FaRegTimesCircle} from 'react-icons/fa'
import {IoCafeOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    //Hyperlinks to corresponding tabs on the navigation bar. 
    return (
        <div className = 'navbar'>
            <div className = 'container'>
                
                <Link to ='/'><h1 className='logo'><span> <IoCafeOutline />Kazuma</span>Itagaki</h1></Link>
                

                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to ='/'><a href= '#'>Home </a></Link></li>
                    <li>
                        <a href='https://drive.google.com/file/d/1xgOipQ8wXos6OgD68TbvIhxgtVnshVE9/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                            Resume
                        </a>
                    </li>
                    {/* <li><Link to ='/photos'><a href= '#'>Photos </a></Link></li> */}
                </ul>
                <div className = 'hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className  = 'icon' />) :  (<GrMenu className = 'icon'/>)}
                </div>
            </div>
        </div>
    )
}

export default Navbar