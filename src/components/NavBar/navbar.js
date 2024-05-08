import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logothreeNew.png'
import contacting from '../../assets/contactmetwo.png'
import {Link} from 'react-scroll';
import menu from '../../assets/menutwo.png'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src = {logo} alt="Logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Message Me</Link>
            </div>
            <button className="desktopMenuButton">
                <img src={contacting} alt="" className="desktopMenuImg" />Contact Me Here</button>

            <img src = {menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}  className="ListItem" onClick={()=>setShowMenu(false)}>Message Me</Link>
            </div>
        </nav>
    )
}
 
export default Navbar