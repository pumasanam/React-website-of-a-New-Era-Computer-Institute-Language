import React, {  useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import ABoutimg from "./../img/back4.jpg";

const About = () => {
    const Oldtime = new Date().toLocaleTimeString();
    const [Otime, setOtime] = useState(Oldtime);

    setInterval(()=>{
        const NewTime = new Date().toLocaleTimeString();
        setOtime(NewTime);
    },1000);

    useEffect(()=>{
      AOS.init({
        duration:1500,
      });
    },[]);
  
  return (
    <>
      <div className="about" data-aos="fade-up">
        <div className="about_img">
            <img src={ABoutimg} alt="" />
        </div>

        <div className="about_list">
            <h4 style={{fontWeight:"bold",fontSize:"1.8rem"}}>About Us</h4>
            <p style={{lineHeight:"1.6rem", fontSize:"1.1rem"}}>New Era Institute is a computer and language institute where we can learn special and popular computer courses as well as some international languages. Located at Lagankhel lalitpur, nearby Everest MO: MO house, we offer our student's to learn computer courses with experienced experts in a very peaceful environment since 2058 BS</p>
            <span style={{backgroundColor:"#ee5253", padding:'12px 15px', fontSize:'1.1rem', borderRadius:'10px', marginTop:'8px'}}>{Otime}</span>
        
        </div>
      </div>
    </>
  );
};

export default About;
