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

  const [openStates, setOpenStates] = useState(experience_json.map(() => false));
  
  const handleMoreInfoClick = (index) => {
    // Toggle the open state for the clicked box
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
    handleMoreDetailClickAnimation('text-box', index, 'moreInfoVisible', 'contribution');
  };

  const handleInfoClose = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = null;
    handleClosingDetailInfo('text-box', index, 'contribution', 'moreInfoVisible');
    setOpenStates(newOpenStates);
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
                    openStates[index] ? 'btn-visible' : ''
                  }`}
                  onClick={()=>handleInfoClose(index)} id="closeBtn">
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
