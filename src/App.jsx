import './App.css'
import Header from './components/Header'
import About from './components/About'
import Expericence from './components/Expericence'
import Portofolio from './components/Portofolio'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import logo from './assets/logo.png'
import { Link, animateScroll as scroll } from "react-scroll";
import {FaFacebook} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Expericence id="exp"/>
      <Portofolio id="porto"/>
      <Benefits />
      <Contact />
      <footer>
        <div className='footer'>
          <img src={logo} alt="" className='logo'/>
          <ul>
              <Link className='li' to='home' duration={2000} smooth={true}>Home</Link>
              <Link className='li' to='porto' duration={2000} smooth={true}>Projects</Link>
              <Link className='li' to='bene' duration={2000} smooth={true}>About</Link>
              <Link className='li' to='conta' duration={2000} smooth={true}>Contact</Link>
          </ul>
        </div>
        <div className="last">
          <p className="copyright">Copyright © 2023 Aleena All Rights Reserved</p>
          <div className="social-media">
            <FaFacebook className='icon'/>
            <FaDribbble className='icon'/>
            <FaLinkedin className='icon'/>
            <FaInstagramSquare className='icon'/>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
