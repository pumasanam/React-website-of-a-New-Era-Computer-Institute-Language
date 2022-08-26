import React from 'react';
import './Course.css';
import courseimg from "./../img/img.png";
import courseimg1 from "./../img/img1.png";
import courseimg2 from "./../img/img2.png";
import courseimg3 from "./../img/img3.png";
import courseimg4 from "./../img/img4.png";
import courseimg5 from "./../img/img5.png";
import courseimg6 from "./../img/img6.png";
import courseimg7 from "./../img/img7.png";
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <>
    <div className="course">
        <h4 className='text-center' style={{fontSize:'2.7rem', color:'#e74c3c', fontWeight:'bold', marginBottom:'20px'}}>Courses</h4>
      <div className=" courselist">
        <Link to="/ComputerSkill" style={{textDecoration:'none'}}>
          <div className="courseStorage" data-aos="fade-up">
            <img src={courseimg} alt="" />
            <h5 className='mt-2'>Basic Computer Skill</h5>
          </div>
        </Link>

          <Link to="/Hardware" style={{textDecoration:'none'}}>
          <div className="courseStorage" data-aos="fade-up">
            <img src={courseimg1} alt="" />
            <h5 className='mt-2'>Hardware & PC Assembling</h5>
          </div>
          </Link>

          <Link to="/Networking" style={{textDecoration:'none'}}>
          <div className="courseStorage" data-aos="fade-up">
            <img src={courseimg2} alt="" />
            <h5 className='mt-2'>Networking Concept</h5>
          </div>
          </Link>

          <Link to="/MicrosoftApplication" style={{textDecoration:'none'}}>
          <div className="courseStorage" data-aos="fade-up">
            <img src={courseimg3} alt="" />
            <h5 className='mt-2'>Microsoft Office Application</h5>
          </div>
          </Link>

          <Link to="/Tally" style={{textDecoration:'none'}}>
          <div className="courseStorage" data-aos="fade-up">
            <img src={courseimg4} alt="" />
            <h5 className='mt-2'>Tally</h5>
          </div>
          </Link>

          <Link to="/Graphic"  style={{textDecoration:'none'}}>
          <div className="courseStorage" data-aos="fade-up">
            <img src={courseimg5} alt="" />
            <h5 className='mt-2'>Graphic Designing</h5>
          </div>
          </Link>

          <Link to="/Web_Designing" style={{textDecoration:'none'}}>
          <div className="courseStorage" data-aos="fade-up">
            <img src={courseimg6} alt="" />
            <h5 className='mt-2'>Basic Web Designing</h5>
          </div>
          </Link>

          <Link to="/Language" style={{textDecoration:'none'}}>
          <div className="courseStorage" data-aos="fade-up">
            <img src={courseimg7} alt="" />
            <h5 className='mt-2'>Language</h5>
          </div>
          </Link>
      </div>
    </div>
    </>
  );
};

export default Courses;
