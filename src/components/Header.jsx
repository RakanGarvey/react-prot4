import React from 'react'
import Menu from './Menu'
import logo from '../assets/logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <Link className='li' to='home' duration={2000} smooth={true}>Home</Link>
            <Link className='li' to='porto' duration={2000} smooth={true}>Projects</Link>
            <Link className='li' to='bene' duration={2000} smooth={true}>About</Link>
            <Link className='li' to='conta' duration={2000} smooth={true}>Contact</Link>
        </ul>
        <Menu />
    </div>
  )
}

export default Header