import React from 'react';
import Navbar from "./../../Navbar/Navbar";
import CourseImg from "./../../img/img6.png";
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import PersonIcon from '@mui/icons-material/Person';
  import coursebannerimg from './../../img/web.jpg';
  import coursebannerimg2 from './../../img/group.jpg';
  import AdjustIcon from '@mui/icons-material/Adjust';
  import Contact from '../../Contact/Contact';
  import Footer from '../../Footer/Footer';


const WebDesigning = ({title}) => {
    
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
                <p> <span style={{fontWeight:'bold'}}>Web design</span> is a Web development process for creating a website that focuses on aesthetic factors like layout, user interface and other visual imagery in order to make the website more visually appealing and easy to use. Web design makes use of various programs and tools in order to achieve the intended look, such as Dreamweaver, Photoshop and many others. In order to create a winning design, Web designers need to think about their audience, the purpose of the website and the visual appeal of the design.    
                </p>

                <p>
                Most websites are created by using a coded language called Hypertext Markup Language (HTML). In order for a website to be successfully displayed on the client browser, it needs to follow the rules of this language. HTML tags identify the website’s content for every page. Cascading Style Sheets (CSS) is then used to define the overall visual appearance of each page. The result is based on the combination of these elements. </p>

                <img src={coursebannerimg} style={{width:'100%', height:'450px', objectFit:"cover"}} alt="" />

                <p><span style={{fontWeight:'bold'}}>{title}</span> is considered a branch of Web Development,  since it helps to make website user interface i.e (what user sees infront of screen). <span style={{fontWeight:'bold'}}>{title}</span> includes <span style={{fontWeight:'bold'}}>HTML</span>, <span style={{fontWeight:'bold'}}>CSS</span>, <span style={{fontWeight:'bold'}}>Javascript</span>,  and many more which are important to know while learning <span style={{fontWeight:'bold'}} >{title}</span>.</p>

                <p><span style={{fontWeight:'bold'}}>{title}</span> contains following courses :</p>

                <ul style={{margin:'0px', padding:'0px'}}>
                   

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>HTML</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>CSS</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Bootstrap</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Hosting</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Hosting</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Free Domain Registration & Free Hosting</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Video Editing (Bonus)</li>



                    



                </ul>

                <img  src={coursebannerimg2} style={{width:'100%', height:'530px', objectFit:"cover", margin:'30px 0px'}} alt="" />

                <h3 style={{marginBottom:'20px'}}>Why To Learn {title}</h3>

                <ul style={{margin:'0px', padding:'0px'}}>
                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Jobs are in high demand</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Student can do freelancing projects</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Start our own business</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Work from home</li>               
                </ul>

                <p>Above given points are the courses that comes inside <span style={{fontWeight:'bold'}}>{title}</span>. These are the courses that are must to know in <span style={{fontWeight:'bold'}}>{title}</span>. Duration to complete <span style={{fontWeight:'bold'}}>{title}</span> is between <span style={{fontWeight:'bold'}}>2 to 3 months</span>. So if anyone is interested in learning <span style={{fontWeight:'bold'}}>{title}</span> then please you can send <span style={{fontWeight:'bold'}}>email</span> or visit our <span style={{fontWeight:'bold'}}>social media</span> or <span style={{fontWeight:'bold'}}>contact</span> to us. We will guide you to learn {title} in a very easy and understandable way. Thank You...</p>

                
               
            </div>
            
        </div>

        <Contact/>

        <Footer/>
    
    </>
  );
};

export default WebDesigning;