import React, { useEffect } from 'react';
import '../style/Experience/experience.css';
import { experience_json } from './experience_json';
import { IoSchool } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';


function Experience() {
  useEffect(() => {
   

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };



    const observer_1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
          target.classList.add('animate-timeline');
        } else {
          target.classList.remove('animate-timeline');
        }
      });
    }, observerOptions);

    const elements_1 = document.querySelectorAll('.timeline-container');
    elements_1.forEach((element) => observer_1.observe(element));


    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
          target.classList.add('animate-container');
        } else {
          target.classList.remove('animate-container');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.observe-container');
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      observer_1.disconnect();
    };
  }, []);



  return (
    <div className='timeline_experience timeline-container' id='Experience'>
      <h1 className='page_title'>Experience</h1>
      <div className='main-experience-container'>
        {experience_json.map((element) => {
          let isWorkIcon = element.icon === "workIcon";
          return (
            <div
              className={`experience_container ${element.position} observe-container`}
              key={element.id}
            >
              <experienceIcon>
                {isWorkIcon ? <MdWork /> : <IoSchool />}
              </experienceIcon>
              <div className='text-box'>
                <h2>{element.title}</h2>
                <small>{element.contribution}</small>
                <p>what you have done during this period</p>
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
