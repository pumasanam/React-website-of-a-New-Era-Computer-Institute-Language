import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';
import ContactIMG from './../img/person.jpg';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  useEffect(()=>{
    AOS.init({
      duration:1500,
    });
  },[]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const SendEmail =(e)=>{
    e.preventDefault();

    if(name ===""){
      alert('Enter Your Email');
    }
    else if(name.length<=2){
      alert('Atleast 3 Characters Are Required');
    }
    else if(!isNaN(name)){
      alert('Numbers And Symbols Are Not Allow');
    }

   else  if(email ===""){
      alert('Enter Your Email');
    }
    else if(email.length <=2){
      alert('Atleast 3 Characters Are Required');
    }
    else if(!isNaN(email)){
      alert('Numbers And Symbols Are Not Allow');
    }

    else  if(message ===""){
      alert('Enter Your Email');
    }
    else if(message.length <=2){
      alert('Atleast 3 Characters Are Required');
    }
    else if(!isNaN(message)){
      alert('Numbers And Symbols Are Not Allow');
    }
    // emailjs.sendForm('service_84zdzo5', 'template_fpmd2rd', e.target,  'M0vhnRDt4gJo3jq_5')
    else{
      emailjs.sendForm('service_84zdzo5', 'template_fpmd2rd', e.target,  'fbdgCP_NoVr7MzorM')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
        toast.success('Email sent')
    }

  }; 
  

  return (
    <>
    <ToastContainer duration={500}/>
      <div className="contact">
            <div className="contact_list" data-aos="fade-up">
                <form action="" onSubmit={SendEmail}>
                    <h5 style={{textAlign:'center', fontSize:'2rem'}}>Contact Us</h5>
                    <div className="form-group">
                        <label htmlFor="" style={{fontSize:'1.1rem', marginBottom:'7px'}}>Name</label>
                        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name='name' placeholder='Name' className='form-control' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="" style={{fontSize:'1.1rem', marginBottom:'7px'}}>Email</label>
                        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' placeholder='Email' className='form-control' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="" style={{fontSize:'1.1rem', marginBottom:'7px'}}>Message</label>
                        <textarea name="message" value={message} onChange={(e)=>{
                          setMessage(e.target.value);
                        }} id="" cols="30" rows="10" placeholder='Message' className='form-control'></textarea>
                    </div>

                    <button className='btn btn-success'  type='submit'>Submit</button>
                </form>
            </div>

            <div className="contact_img" data-aos="fade-up">
                <img src={ContactIMG} alt="" />
                <h5>Binay Bajracharya</h5>
                <h6>CEO</h6>
                <p>Hi, I’m <span style={{fontWeight:'bold'}}>Binay Bajracharya</span> and the <span style={{fontWeight:'bold'}}>CEO</span> of <span style={{fontWeight:'bold'}}>New Era Computer & Language Institute</span>. I am also Computer Technician
                Under GT computer hardware college (2059) with 18 years of teaching experience which includes (computer basic to diploma, graphic designing, accounting tally & advanced Excel, hardware & networking) </p>
            </div>
      </div>
    </>
  );
};

export default Contact;
