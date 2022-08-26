import React from 'react';
import './Hardware.css';
import Navbar from "./../../Navbar/Navbar";
import CourseImg from "./../../img/img1.png";
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
                <p> <span style={{fontWeight:'bold'}}>Computer hardware</span>  includes the physical parts of a computer, such as central processing unit (CPU), random access memory (RAM), monitor, mouse, keyboard, computer data storage, graphics card, sound card, speakers and motherboard. By contrast, software is the set of instructions that can be stored and run by hardware. Hardware is so-termed because it is "hard" or rigid with respect to changes, whereas software is "soft" because it is easy to change.  </p>

                <img src={coursebannerimg} style={{width:'100%', height:'450px', objectFit:"cover"}} alt="" />

                <p>In simple term, inside <span style={{fontWeight:'bold'}}>{title}</span> student will learn how to assemble the external as well as internal parts of computer physically. <span style={{fontWeight:'bold'}}>{title}</span> contains basic courses such as <span style={{fontWeight:'bold'}}>Introduction to Computer Hardware</span>, <span style={{fontWeight:'bold'}}>Concept of Computer Primary Devices</span>, <span  style={{fontWeight:'bold'}}>Computer Assembling</span>  and many more which are important to know while learning <span style={{fontWeight:'bold'}} >{title}</span>.</p>

                <p><span style={{fontWeight:'bold'}}>{title}</span> contains following courses :</p>

                <ul style={{margin:'0px', padding:'0px'}}>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Introduction To Computer Hardware </li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Computer Basic Primary Devices</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Computer Assembling & Maintained</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Computer Bios & System Installation</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> HDD Partition & Management Of Drives</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Program Installation & Remove</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Installation Of Webcams, Printer, Scanner & Others</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Data Transfer, Serial & Parallel ports</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> AntiVirus Installation & Updating</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Troubleshooting in Hardware & operation system & point wise troubleshooting</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Most useful software for pc (icloud, Dropbox, one Drive or Google Drive, Winrar, 7zip, Photoshop, Paint.net, Photoscape, Clipboard Manager, Web Browser, Antivirus, Vlc etc)</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>System Tuning & Utilities (Anydesk or Team Viewer, Tera Copy, Wireless Network Watcher, Recuva, Aomei Partition, Virtual Box, Rufus, Internet Download Manager, Apowersoft Screen Recorder, Ccleaner, Defragged, Wise Auto Shutdown, Usb low-level format, Speed fan, Deep Freeze, Harddisk Sentinel for windows etc)</li>
                </ul>

                <img  src={coursebannerimg2} style={{width:'100%', height:'530px', objectFit:"cover", margin:'30px 0px'}} alt="" />

                <h3 style={{marginBottom:'20px'}}>Why To Learn {title}</h3>

                <ul style={{margin:'0px', padding:'0px'}}>
                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> reduce costs by automating routine tasks, such as record-keeping, accounting and payroll </li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> improve customer service or supplier relationships</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>develop more effective communication within the business or with customers</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> increase business efficiency and staff productivity</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Helps To Get Knowledge About Primary Devices Effectively</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>For a computer system to work to maximum efficiency and reliability, quality computer assembly is required</li>

                   
                </ul>

                <p>Above given points are the courses that comes inside <span style={{fontWeight:'bold'}}>{title}</span>. These are the courses that are must to know in <span style={{fontWeight:'bold'}}>{title}</span>. Duration to complete <span style={{fontWeight:'bold'}}>{title}</span> is between <span style={{fontWeight:'bold'}}>1.5 to 2 months</span>. So if anyone is interested in learning <span style={{fontWeight:'bold'}}>{title}</span> then please you can send <span style={{fontWeight:'bold'}}>email</span> or visit our <span style={{fontWeight:'bold'}}>social media</span> or <span style={{fontWeight:'bold'}}>contact</span> to us. We will guide you to learn {title} in a very easy and understandable way. Thank You...</p>

                
               
            </div>
            
        </div>

        <Contact/>

        <Footer/>
    
    </>
  );
};

export default BasicComputerSkill;