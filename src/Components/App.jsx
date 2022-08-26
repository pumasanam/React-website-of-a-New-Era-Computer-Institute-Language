import React from 'react';
import './App.css';
import Home from './Home/Home';
import {Routes, Route} from 'react-router-dom';
import BasicComputerSkill from './CoursesDescription/BCS/BasicComputerSkill';
import Hardware from './CoursesDescription/Hardware/Hardware';
import Networking from './CoursesDescription/Networking Concept/Networking';
import MicrosoftApplication from './CoursesDescription/MOA/MicrosoftApplication';
import Graphic from './CoursesDescription/Graphic Designing/Graphic';
import WebDesigning from './CoursesDescription/Basic Web Designing/WebDesigning';
import Tally from './CoursesDescription/Tally/Tally';
import Language from './CoursesDescription/Language/Language';
const App = () => {
  return (
    <>
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ComputerSkill" element={<BasicComputerSkill title="Basic Computer Skill"/>}/>
        <Route path="/Hardware" element={<Hardware title="Hardware & PC Assembling"/>}/>
        <Route path="/Networking" element={<Networking title="Networking Concept"/>}/>
        <Route path="/MicrosoftApplication" element={<MicrosoftApplication title="Microsoft Office Application"/>}/>
        <Route path="/Graphic" element={<Graphic title="Graphic Designing"/>}/>
        <Route path="/Web_Designing" element={<WebDesigning title="Basic Web Designing"/>}/>
        <Route path="/Tally" element={<Tally title="Tally"/>}/>
        <Route path="/Language" element={<Language title="Language"/>}/>
      </Routes>
    </>
  );
};

export default App;
