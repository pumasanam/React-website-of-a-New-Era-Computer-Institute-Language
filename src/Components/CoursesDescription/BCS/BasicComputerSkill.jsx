import React from 'react';
import './Bsc.css';
import Navbar from "./../../Navbar/Navbar";
import CourseImg from "./../../img/img.png";
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import PersonIcon from '@mui/icons-material/Person';
  import coursebannerimg from './../../img/courseBanner (2).jpg';
  import coursebannerimg2 from './../../img/group.jpg';
  import AdjustIcon from '@mui/icons-material/Adjust';
  import Contact from '../../Contact/Contact';
  import Footer from '../../Footer/Footer';


const BasicComputerSkill = ({title}) => {
    
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
                <p><span style={{fontWeight:'bold'}}>{title}</span> is one of the basic but most important course of computer learning. This course is especially designed for beginers, who are very new towards learning computer. It contains all those basic knowledge to learn computer. We have organized this course in a very easy and understandable way, so that anyone who is interested to know the course can learn it very easily.</p>
                
                <img src={coursebannerimg} style={{width:'100%', height:'450px', objectFit:"cover"}} alt="" />

                <p><span style={{fontWeight:'bold'}}>{title}</span> contains basic courses such as Typing, MS-WORD, PowerPoint etc.which are basic and must need to know in computer because these are basics in computer. Without having basic knowledge on computer, it becomes very difficult to upgrade computer knowledge for someone who wants to have advance knowledge on computer.</p>

                <p><span style={{fontWeight:'bold'}}>{title}</span> contains following courses :</p>

                <ul style={{margin:'0px', padding:'0px'}}>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Typing Training & Practice </li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Computer Introduction</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Microsoft Word</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Microsoft Excel</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Microsoft Powerpoint</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Microsoft XP/7/10</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Windows Accessories</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Multimedia</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Internet/Email</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Nepali Typing</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421'}}/> Project Report & Review</li>
                </ul>

                <p>Above given points are the courses that comes inside <span style={{fontWeight:'bold'}}>{title}</span>. These are the basic courses that are must to know in computer basics. Duration to complete <span style={{fontWeight:'bold'}}>{title}</span> is between <span style={{fontWeight:'bold'}}>1.5 to 2 months</span>. Once the basics are completed then we can move towards advance courses in computer. So if anyone is interested in learning <span style={{fontWeight:'bold'}}>{title}</span> then please you can send <span style={{fontWeight:'bold'}}>email</span> or visit our <span style={{fontWeight:'bold'}}>social media </span> or <span style={{fontWeight:'bold'}}>contact</span> to us. We will guide you to learn computer basics in a very easy and understandable way. Thank You...</p>

                <img src={coursebannerimg2} style={{width:'100%', height:'530px', objectFit:"cover"}} alt="" />
               
            </div>
            
        </div>

        <Contact/>

        <Footer/>
    
    </>
  );
};

export default BasicComputerSkill;