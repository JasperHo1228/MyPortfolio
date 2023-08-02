import React,{useState} from 'react';
import '../style/Experience/skills.css';
import Onion from '../component/onion.js'; 

function Skills() {
  return (
    <div className="skill-container" id="Skills">
      <h1 className="page_title">Skills</h1>
      <div className='skillset-content'>
          <Onion />
          <div className="motto">
            Software development just like an Onion Layer<br/>
              Select each layer to show stack skills.
          </div>
     
      </div>
    </div>
  );
}

export default Skills;

