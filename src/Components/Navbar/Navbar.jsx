import React, { useState } from 'react';
import './Navbar.css';
import LogoImg from './../img/logo.png';
import { Link} from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarFun = () => {
  const [bgcolor, setBgcolor] = useState(false);

  const BackgroundToggle =()=>{
    if(window.scrollY>80){
      setBgcolor(true);
    }

    else{
      setBgcolor(false);
    }
  }

  window.addEventListener('scroll', BackgroundToggle);
    
  return (
    <>


    <Navbar expand="lg" className={bgcolor ? 'navbar bg': 'navbar'}>
      <Container>
        <Navbar.Brand href="#home"><Link to="main_carousel" className="imgLink" spy={true} smooth={true} offset={-10} duration={500}><img src={LogoImg} alt="logo" /> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="main_nav_ul">
                    <ul className='ul'>
                        <li><Link to="main_carousel" className='nav_link' spy={true} smooth={true} offset={-10} duration={500}>Home</Link></li>
                        <li><Link to="service" className='nav_link' spy={true} smooth={true} offset={-150} duration={500}>Service</Link></li>
                        <li><Link to="course" className='nav_link' spy={true} smooth={true} offset={-110} duration={500}>Courses</Link></li>
                        <li><Link to="about" className='nav_link' spy={true} smooth={true} offset={-150} duration={500}>About</Link></li>
                        <li><Link to="contact" className='nav_link' spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
                        
                    </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  );
};

export default NavbarFun;
