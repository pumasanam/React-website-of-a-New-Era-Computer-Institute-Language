import React from 'react';
import Navbar from "./../../Navbar/Navbar";
import CourseImg from "./../../img/img7.png";
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import PersonIcon from '@mui/icons-material/Person';
  import coursebannerimg2 from './../../img/banner.jpg';
  import AdjustIcon from '@mui/icons-material/Adjust';
  import Contact from '../../Contact/Contact';
  import Footer from '../../Footer/Footer';


const Language = ({title}) => {
    
    const  Da = new Date().toLocaleDateString();
   
  return (
    <>
        <Navbar/>

        <div className="courseBanner">
            <h5>{title}</h5>
            <h6>Description</h6>
        </div>

        <div className="courseDescp">
            <div className="desc_img" style={{textAlign:'center',marginBottom:'25px'}}><img src={CourseImg} alt="" /></div>
            <div className="course_Spans">
                <span style={{marginRight:'20px', display:'inline-block', color:'#505050'}}><CalendarTodayIcon style={{marginRight:'3px',color:'#ff5421'}}/> {Da}</span> 
                <span style={{color:'#505050'}}><PersonIcon style={{marginRight:'3px', color:'#ff5421',}}/> Admin</span>
            </div>

            <div className="course_title" style={{margin:'3rem 0rem'}}>
                <h2 style={{color:'#111111', fontSize:'36px', fontWeight:'700',lineHeight:'40px'}}>{title}</h2>
            </div>

            <div className="course_para">
                <p>
                    We also provide course related to <span style={{fontWeight:'bold'}}>English {title}</span> which consists of level from (basic, intermediate, advanced). We also have a facility of single classes as well as we also provide classes for <span style={{fontWeight:'bold'}}>IELTS</span> . So if anyone is interested in learning <span style={{fontWeight:'bold'}}>English {title}</span>  then please you can send <span style={{fontWeight:'bold'}}>email</span> or visit our <span style={{fontWeight:'bold'}}>social media</span> or <span style={{fontWeight:'bold'}}>contact</span> to us. We will guide you to learn {title} in a very easy and understandable way. Thank You...

                </p>
                <img  src={coursebannerimg2} style={{width:'100%', height:'530px', objectFit:"cover", margin:'30px 0px'}} alt="" />

                <h3 style={{marginBottom:'20px'}}>Why To Learn English {title}</h3>

                <ul style={{margin:'0px', padding:'0px'}}>
                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Improve communication skills</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Explore the world with confidence</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Access world-class education systems and establishments</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Improve and widen employment opportunities</li>               
                </ul>
            </div>
            
        </div>

        <Contact/>

        <Footer/>
    
    </>
  );
};

export default Language;