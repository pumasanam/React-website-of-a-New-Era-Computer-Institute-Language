import React from 'react';
import './Networking.css';
import Navbar from "./../../Navbar/Navbar";
import CourseImg from "./../../img/img2.png";
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import PersonIcon from '@mui/icons-material/Person';
  import coursebannerimg from './../../img/network.jpg';
  import coursebannerimg2 from './../../img/group.jpg';
  import AdjustIcon from '@mui/icons-material/Adjust';
  import Contact from '../../Contact/Contact';
  import Footer from '../../Footer/Footer';


const Networking = ({title}) => {
    
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
                <p> <span style={{fontWeight:'bold'}}>A computer network </span> is a set of computers sharing resources located on or provided by network nodes. The computers use common communication protocols over digital interconnections to communicate with each other. These interconnections are made up of telecommunication network technologies, based on physically wired, optical, and wireless radio-frequency methods that may be arranged in a variety of network topologies.   
                </p>

                <p>
                The nodes of a computer network can include personal computers, servers, networking hardware, or other specialised or general-purpose hosts. They are identified by network addresses, and may have hostnames. Hostnames serve as memorable labels for the nodes, rarely changed after initial assignment. Network addresses serve for locating and identifying the nodes by communication protocols such as the Internet Protocol. </p>

                <img src={coursebannerimg} style={{width:'100%', height:'450px', objectFit:"cover"}} alt="" />

                <p><span style={{fontWeight:'bold'}}>Computer networking</span> may be considered a branch of computer science, computer engineering, and telecommunications, since it relies on the theoretical and practical application of the related disciplines. <span style={{fontWeight:'bold'}}>{title}</span> contains basic courses such as <span style={{fontWeight:'bold'}}>Peer to Peer Networking, Printer Sharing</span>, <span style={{fontWeight:'bold'}}>Wire Setting and Multi Pc (1 Cpu to 4 monitor)</span>,  and many more which are important to know while learning <span style={{fontWeight:'bold'}} >{title}</span>.</p>

                <p><span style={{fontWeight:'bold'}}>{title}</span> contains following courses :</p>

                <ul style={{margin:'0px', padding:'0px'}}>
                   

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Peer to Peer Networking, Printer Sharing </li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Wire Setting and Multi Pc (1 Cpu to 4 monitor)</li>
                </ul>

                <img  src={coursebannerimg2} style={{width:'100%', height:'530px', objectFit:"cover", margin:'30px 0px'}} alt="" />

                <h3 style={{marginBottom:'20px'}}>Why To Learn {title}</h3>

                <ul style={{margin:'0px', padding:'0px'}}>
                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> The right networking solution can help your business grow and evolve </li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> it allow staff to share information effortlessly, increasing productivity and efficiency, other benefits include cost-effectiveness, storage efficiency, flexibility, and data security</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Cost-effective resource sharing</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Improving storage efficiency and volume</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Helps Cut costs on software</li>                   
                </ul>

                <p>Above given points are the courses that comes inside <span style={{fontWeight:'bold'}}>{title}</span>. These are the courses that are must to know in <span style={{fontWeight:'bold'}}>{title}</span>. Duration to complete <span style={{fontWeight:'bold'}}>{title}</span> is between <span style={{fontWeight:'bold'}}>1.5 to 2 months</span>. So if anyone is interested in learning <span style={{fontWeight:'bold'}}>{title}</span> then please you can send <span style={{fontWeight:'bold'}}>email</span> or visit our <span style={{fontWeight:'bold'}}>social media</span> or <span style={{fontWeight:'bold'}}>contact</span> to us. We will guide you to learn {title} in a very easy and understandable way. Thank You...</p>

                
               
            </div>
            
        </div>

        <Contact/>

        <Footer/>
    
    </>
  );
};

export default Networking;