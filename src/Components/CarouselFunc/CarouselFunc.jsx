import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from "./../img/back2.jpg";
import logo2 from "./../img/back1.jpg";
import logo3 from "./../img/banner.jpg";
import "./Carousel.css";
const CarouselFunc = () => {
  return (
    <>
        <div className="main_carousel">

          <Carousel controls={false} classname="Carousel"  interval={3000} indicators={true}  fade={true}>
      <Carousel.Item className='carousel_item'>
        <img
          className="d-block w-100"
          src={logo1}
          alt="First Frame"
          style={{width:"100%", height:"100vh", objectFit:"cover"}}
        />
        <Carousel.Caption className="caption" >
          <h6 className='capton_h4' style={{color:'aqua', fontSize:"1.8rem", fontWeight:"bold"}}>WELCOME TO</h6>
          <h5 style={{fontSize:"2.3rem", color:'#ecf0f1'}}>New Era Computer & Language Institute</h5>
        </Carousel.Caption>
      </Carousel.Item>

      {/* first carousel section */}

      <Carousel.Item className='carousel_item'>
        <img
          className="d-block w-100"
          src={logo3}
          alt="Second Frame"
          style={{width:"100%", height:"100vh", objectFit:"cover"}}
        />

        <Carousel.Caption className="caption">
          <h6 className='capton_h4' style={{color:'aqua', fontSize:"1.9rem", fontWeight:"bold"}}>GET KNOWLEDGE</h6>
          <h5 style={{fontSize:"2.3rem", color:'#ecf0f1'}}>Computer Courses & Language Training</h5>
        </Carousel.Caption>
      </Carousel.Item>

      {/* second carousel section */}
      
      <Carousel.Item className='carousel_item'>
        <img
          className="d-block w-100"
          src={logo2}
          alt="Third Frame"
          style={{width:"100%", height:"100vh", objectFit:"cover"}}
        />

        <Carousel.Caption className="caption">
        <h6 className='capton_h4' style={{color:'aqua', fontSize:"1.9rem", fontWeight:"bold"}}>LEARN WITH</h6>
          <h5 style={{fontSize:"2.3rem", color:'#ecf0f1'}}>Experts In A Advance Way</h5>
        </Carousel.Caption>
      </Carousel.Item>
      {/* third carousel section */}
    </Carousel>
    </div>


    </>
  );
};

export default CarouselFunc;
