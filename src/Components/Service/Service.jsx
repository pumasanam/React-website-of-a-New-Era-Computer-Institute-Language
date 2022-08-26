import React, {useEffect} from 'react';
import './Service.css';
import ServiceImg from "./../img/back.jpg";
import Accordion from 'react-bootstrap/Accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(()=>{
    AOS.init({
      duration:1500,
    });
  },[]);
  return (
    <>

    <div className="service">
        <div className="service_img">
           <img src={ServiceImg} style={{width:'100%'}} alt="" />
        </div>

        <div className='service_Second_col ' >
            <h2 className='mb-3'>Why With Us ?</h2>

            <Accordion  defaultActiveKey={['0']} alwaysOpen className="accordion">
                    <Accordion.Item   eventKey="0" className="accordion_item">
                        <Accordion.Header> <i className="fa fa-globe" style={{marginRight:"5px", fontSize:"20px",cursor:"pointer" ,color:"#e74c3c"}} aria-hidden="true"></i>Peaceful Environment</Accordion.Header>
                        <Accordion.Body>
                          Peaceful environment is very essential part in learning anything. Noisy , unhealthy and misbehaved environment decreases the ability of brain to learn. So we focus on having a peaceful environment so that our students can observe and obtain as much as knowledge from their related course.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion_item">
                        <Accordion.Header> <i class="fa fa-user" aria-hidden="true" style={{marginRight:"5px", fontSize:"20px",cursor:"pointer" ,color:"#e74c3c"}}></i>Learn With Experts</Accordion.Header>
                        <Accordion.Body>
                          For learning any course, a proper teacher is very essential to teach. We provide proper, experienced expert to teach to our student so that our student will be able to learn their relative course properly as well as in a understandable way.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion_item">
                        <Accordion.Header> <i className="fa fa-file-text-o" style={{marginRight:"5px", fontSize:"20px",cursor:"pointer" ,color:"#e74c3c"}} aria-hidden="true"></i>Earn Certificate</Accordion.Header>
                        <Accordion.Body>
                          Certificate is very important part regarding any courses. It defines the complition of any course. We provide proper and valid certificate so that our student can have a proper job related to their courses.
                        </Accordion.Body>
                    </Accordion.Item>

                 
                </Accordion>
        </div>
    </div>
  



    </>
  );
};

export default Service;
