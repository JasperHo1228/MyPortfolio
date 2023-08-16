import React, { useEffect, useState } from 'react';
import '../style/experience.css';
import { experience_json } from './experience_json';
import { IoSchool } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import {ImCross} from 'react-icons/im'
import scrollAnimation from '../component/scrollAnimation';
import { handleMoreDetailClickAnimation, handleClosingDetailInfo } from '../component/moreInfoAnimation';


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

    const [currentInfo, setCurrentInfo] = useState(null);
    
    const handleMoreInfoClick = (index) => {
       //handle open more info animation
        handleMoreDetailClickAnimation('text-box', index, currentInfo, 'moreInfoVisible', 'contribution');
        setCurrentInfo(index);
    };
    
  
    const handleInfoClose = () => {
       //handle closing animation
        handleClosingDetailInfo('text-box',currentInfo,'contribution', 'moreInfoVisible');
        setCurrentInfo(null);
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
                    currentInfo === index ? 'btn-visible' : ''
                  }`}
                  onClick={handleInfoClose} id="closeBtn">
                          <ImCross/>
                </div>
                <h2 className='experience-title'>{element.title}</h2>
                <h3 className='experience-subtitle'>{element.subtitle}</h3>
                <h5 className='experience-date'>{element.date}</h5>
                <div className="TapMebtn" onClick={() => handleMoreInfoClick(index)}>View More</div>
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
