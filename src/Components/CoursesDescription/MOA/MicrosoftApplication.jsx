import React from 'react';
import Navbar from "./../../Navbar/Navbar";
import CourseImg from "./../../img/img3.png";
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  import PersonIcon from '@mui/icons-material/Person';
  import coursebannerimg from './../../img/office.png';
  import coursebannerimg2 from './../../img/group.jpg';
  import AdjustIcon from '@mui/icons-material/Adjust';
  import Contact from '../../Contact/Contact';
  import Footer from '../../Footer/Footer';
  import './MicrosoftApplication.css'


const MicrosoftApplication = ({title}) => {
    
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
                <p> <span style={{fontWeight:'bold'}}>{title}</span> is a set of computer softwares such as MS-WORD, Powerpoint, Excel etc. which are used in day to day basis by offices, companies around the world to handle their important datas which may be resource management, finanace management etc. 
                 Courses included inside <span style={{fontWeight:'bold'}}>{title}</span>  are very high in demand as it fullfills the regular and important informations of any companies.
                </p>

         

                <img src={coursebannerimg} style={{width:'100%', height:'450px', objectFit:"cover"}} alt="" />

                <p> <span style={{fontWeight:'bold'}}>{title}</span> contains basic courses such as <span style={{fontWeight:'bold'}}>Computer Introduction</span>, <span style={{fontWeight:'bold'}}>Photoshop</span>,  and many more which are important to know while learning <span style={{fontWeight:'bold'}} >{title}</span>.</p>

                <p><span style={{fontWeight:'bold'}}>{title}</span> contains following courses :</p>

                <ul style={{margin:'0px', padding:'0px'}}>
                   

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Computer Introduction </li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Advanced Word with official project work</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Advanced Excel with official project work</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Advanced Powerpoint with official project work</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Advanced Access with official project work</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>InDesign</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Adobe Photoshop</li>

                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Internet/Email</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Multimedia</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Virus Scanning</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Protecting Computers</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>(Scan Disk, Disk Cleanup, Defragmentor)</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Software Installation</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>(Software & Data Backup)</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>System Restore</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Using Devices (Bootable OS)</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Printing & Scanning</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Computer Bios</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Computer Formatting</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Troubleshooting Hardware</li>
                    <li style={{marginBottom:'8px'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Troubleshooting Software</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Most useful software for pc (icloud, Dropbox, one Drive or Google Drive, Winrar, 7zip, Photoshop, Paint.net, Photoscape, Clipboard Manager, Web Browser, Antivirus, Vlc etc)</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>System Tuning & Utilities (Anydesk or Team Viewer, Tera Copy, Wireless Network Watcher, Recuva, Aomei Partition, Virtual Box, Rufus, Internet Download Manager, Apowersoft Screen Recorder, Ccleaner, Defragged, Wise Auto Shutdown, Usb low-level format,  etc)</li>



                </ul>

                <img  src={coursebannerimg2} style={{width:'100%', height:'530px', objectFit:"cover", margin:'30px 0px'}} alt="" />

                <h3 style={{marginBottom:'20px'}}>Why To Learn {title}</h3>

                <ul style={{margin:'0px', padding:'0px'}}>
                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Helps to create important datas of personel as well as companies and keep it safe</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Microsoft Office products are the most widely-used business productivity software worldwide</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Cost-effective resource sharing</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/> Knowing Microsoft Office products will give you a leg up in the job hunt</li>

                    <li style={{marginBottom:'8px', textTransform:'capitalize'}}><AdjustIcon style={{color:'#ff5421',marginRight:'6px'}}/>Microsoft Office knowledge helps you be a better employee and coworker</li>                   
                </ul>

                <p>Above given points are the courses that comes inside <span style={{fontWeight:'bold'}}>{title}</span>. These are the courses that are must to know in <span style={{fontWeight:'bold'}}>{title}</span>. Duration to complete <span style={{fontWeight:'bold'}}>{title}</span> is between <span style={{fontWeight:'bold'}}>5 to 6 months</span>. So if anyone is interested in learning <span style={{fontWeight:'bold'}}>{title}</span> then please you can send <span style={{fontWeight:'bold'}}>email</span> or visit our <span style={{fontWeight:'bold'}}>social media</span> or <span style={{fontWeight:'bold'}}>contact</span> to us. We will guide you to learn {title} in a very easy and understandable way. Thank You...</p>

                
               
            </div>
            
        </div>

        <Contact/>

        <Footer/>
    
    </>
  );
};

export default MicrosoftApplication;