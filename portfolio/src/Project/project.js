import React, { useState } from 'react';
import '../style/project.css';
import { project_json } from './project_json';
import {ImCross} from 'react-icons/im'
function Project() {

    
  const projects = [...project_json];

  const [currentProject, setCurrentProject] = useState(null);
  
  const handleMoreDetailClick = (index) => {
    const frame = document.getElementById(`frame-${index}`);
    frame.classList.toggle('overlay-visible', true);
    setCurrentProject(index);
  };
  
  const handleOverlayClose = () => {
    const frame = document.getElementById(`frame-${currentProject}`);
    frame.classList.toggle('overlay-visible', false);
    setCurrentProject(null);
  };
  
  return (
    <div className='project' id='Project'>
      <h1 className='project_title'>Project</h1>
      <div className='project-container'>
        {projects.map((link, index) => (
          <div className='frame'
          id={`frame-${index}`}
          key={index}>
            <div className='project_item'>
              <div className='project_img'>
              <div
                  className={`closebtn ${
                    currentProject === index ? 'btn-visible' : 'btn-hidden'
                  }`}
                  onClick={handleOverlayClose}
                >
                          <ImCross/>
                </div>
                <img src={link.image} className='projectImg' alt='' />
              </div>
              <div className='project_link'>
                <div className='title'>
                  <h3>{link.title}</h3>
                </div>
              </div>
              <div className='project_link'>
                <div
                  className="detailbtn" 
                  onClick={() => handleMoreDetailClick(index)}
                >
                   <div class="gradient-text">
                        More Detail
                    </div>
                </div>
              </div>
              {currentProject === index && (
                <div className='frame-overlay'>
                <div className='project_detail'>
                  <h2 className='projectAim'>Project Aim</h2>
                  <p className="project_description">{link.description}</p>
                  <div className='project_link linkInfo'>
                    <a
                      href={link.youtube_link}
                      className='btn'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Youtube Demo
                    </a>
                    <a
                      href={link.source_code}
                      className='btn2'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Source Code
                    </a>
                  </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
