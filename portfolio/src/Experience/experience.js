import React, { useEffect, useState } from 'react';
import '../style/experience.css';
import { experience_json } from './experience_json';
import { IoSchool } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import {ImCross} from 'react-icons/im'
import scrollAnimation from '../component/scrollAnimation';


function Experience() {
  useEffect(() => {
    // timeline should run first so threshold should be smaller
    const timeline = scrollAnimation('animate-timeline','.timeline-container',0.3);
    const content = scrollAnimation('animate-container','.observe-container',0.5);

    return () => {
      timeline.disconnect();
      content.disconnect();
    };
  }, []);

    const [currentProject, setCurrentProject] = useState(null);
    
    const handleMoreDetailClick = (index) => {
      const frame = document.getElementById(`text-box-${index}`);
    
      // If the clicked item is already open, close it
      if (currentProject === index) {
        frame.classList.toggle('moreInfoVisible', false);
        setCurrentProject(null);
      }
      
      else {
        // If another item is already open, close it first
        const currentFrame = document.getElementById(`text-box-${currentProject}`);
        if (currentFrame) {
          currentFrame.classList.toggle('moreInfoVisible', false);
        }
    
        // Open the clicked item
        frame.classList.toggle('moreInfoVisible', true);
        setCurrentProject(index);
      }
    };
    
  
    const handleOverlayClose = () => {
      if (currentProject !== null) {
        const frame = document.getElementById(`text-box-${currentProject}`);
        const contribution = document.getElementById(`contribution-${currentProject}`);
        contribution.setAttribute('closing', '');
        contribution.addEventListener('animationend', () => {
          contribution.removeAttribute('closing');
        }, { once: true });
        frame.classList.toggle('moreInfoVisible', false);
        setCurrentProject(null);
      }
    };
    
  return (
    <div className='timeline_experience timeline-container' id='Experience'>
      <h1><div className='red-title'>Experience</div></h1>
      <div className='main-experience-container'>
        {experience_json.map((element,index) => {
          let isWorkIcon = element.icon === "workIcon";
          return (
            <div
              className={`experience_container ${element.position} observe-container`}
              key={element.id}>
              <div className='experienceIcon'>
                {isWorkIcon ? <MdWork /> : <IoSchool />}
              </div>
              <div className='text-box' id={`text-box-${index}`}>
              <div
                  className={`Experience_closebtn ${
                    currentProject === index ? 'btn-visible' : 'btn-hidden'
                  }`}
                  onClick={handleOverlayClose}>
                          <ImCross/>
                </div>
                <h2 className='experience-title'>{element.title}</h2>
                <h3 className='experience-subtitle'>{element.subtitle}</h3>
                <h5 className='experience-date'>{element.date}</h5>
                <div className="TapMebtn" onClick={() => handleMoreDetailClick(index)}>View More</div>
                <div className='experience-contribution' id={`contribution-${index}`}>{element.contribution}</div>
                <span className={element.arrow}></span>
              </div>
            </div>
          );
        })}
      </div>
   
    </div>
  );
}

export default Experience;