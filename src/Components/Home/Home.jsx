import React from 'react';
import NavbarFun from "./../Navbar/Navbar";
import CarouselFunc from '../CarouselFunc/CarouselFunc';
import Service from '../Service/Service';
import Courses from '../Courses/Courses';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <NavbarFun/>
      <CarouselFunc/>
      <Service/>
      <Courses/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
