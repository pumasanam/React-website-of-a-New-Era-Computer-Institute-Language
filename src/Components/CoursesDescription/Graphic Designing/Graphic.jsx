import React from 'react';
import Navbar from "./../../Navbar/Navbar";
import CourseImg from "./../../img/img5.png";
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import PersonIcon from '@mui/icons-material/Person';
  import coursebannerimg from './../../img/graphic.jpg';
  import coursebannerimg2 from './../../img/group.jpg';
  import AdjustIcon from '@mui/icons-material/Adjust';
  import Contact from '../../Contact/Contact';
  import Footer from '../../Footer/Footer';


const Graphic = ({title}) => {
    
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
                <p> <span style={{fontWeight:'bold'}}>Graphic design</span> is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.  
                </p>

                <p><span style={{fontWeight:'bold'}}>Graphic designing</span> refers how to present the object in front of the screen. It is one of the most popular course as the graphic designers are in demand all over the world. We offer learning <span style={{fontWeight:'bold'}}>{title}</span>  course with experts in a very reasonable price. </p>
                 

                <img src={coursebannerimg} style={{width:'100%', height:'450px', objectFit:"cover"}} alt="" />

                <p><span style={{fontWeight:'bold'}}>{title}</span> contains basic courses such as <span style={{fontWeight:'bold'}}>InDesign</span>, <span style={{fontWeight:'bold'}}>Photoshop</span>,  and many more which are important to know while learning <span style={{fontWeight:'bold'}} >{title}</span>.</p>

                <p><span style={{fontWeight:'bold'}}>{title}</span> contains following courses :</p>

                <ul style={{margin:'0px', padding:'0px'}}>
                   

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>InDesign</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Adobe Photoshop</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Adobe Image Ready</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Scanning & Printing</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Macromedia Freehand / Illustrator/ CorelDraw</li>


                </ul>

                <img  src={coursebannerimg2} style={{width:'100%', height:'530px', objectFit:"cover", margin:'30px 0px'}} alt="" />

                <h3 style={{marginBottom:'20px'}}>Why To Learn {title}</h3>

                <ul style={{margin:'0px', padding:'0px'}}>
                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>    Plenty of job opportunities</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Make your work score on the world</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Work across multiple Industries</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Become a problem solver</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Graphic designers have a fun work environment</li>                   
                </ul>

                <p>Above given points are the courses that comes inside <span style={{fontWeight:'bold'}}>{title}</span>. These are the courses that are must to know in <span style={{fontWeight:'bold'}}>{title}</span>. Duration to complete <span style={{fontWeight:'bold'}}>{title}</span> is between <span style={{fontWeight:'bold'}}>3 to 4 months</span>. So if anyone is interested in learning <span style={{fontWeight:'bold'}}>{title}</span> then please you can send <span style={{fontWeight:'bold'}}>email</span> or visit our <span style={{fontWeight:'bold'}}>social media</span> or <span style={{fontWeight:'bold'}}>contact</span> to us. We will guide you to learn {title} in a very easy and understandable way. Thank You...</p>

                
               
            </div>
            
        </div>

        <Contact/>

        <Footer/>
    
    </>
  );
};

export default Graphic;