import React, { useState } from 'react';
import '../style/project.css';
import { project_json } from './project_json';
import {ImCross} from 'react-icons/im'
function Project() {

    
  const projects = [...project_json];

  const [currentProject, setCurrentProject] = useState(null);
  
  const handleMoreDetailClick = (index) => {
    const frame = document.getElementById(`frame-${index}`);
  
    // If the clicked item is already open, close it
    if (currentProject === index) {
      frame.classList.toggle('overlay-visible', false);
      setCurrentProject(null);
    } else {
      // If another item is already open, close it first
      const currentFrame = document.getElementById(`frame-${currentProject}`);
      if (currentFrame) {
        currentFrame.classList.toggle('overlay-visible', false);
      }
  
      // Open the clicked item
      frame.classList.toggle('overlay-visible', true);
      setCurrentProject(index);
    }
  };
  
      

  
  const handleOverlayClose = () => {
    const frame = document.getElementById(`frame-${currentProject}`);
    frame.classList.toggle('overlay-visible', false);
    const overlay = document.getElementById(`overlay-${currentProject}`);
    overlay.setAttribute('closing', '');
    overlay.addEventListener('animationend', () => {
      overlay.removeAttribute('closing');
    }, { once: true });
    setCurrentProject(null);
  };
  
  return (
    <div className='project' id='Project'>
      <h1><div className='green-title'>Project</div></h1>
      <div className='project-container'>
        {projects.map((link, index) => (
          <div className='frame'
          id={`frame-${index}`}
          key={index}>
            <div className='project_item'>
              <div className='project_img'>
              <div
                  className={`closebtn ${
                    currentProject === index ? 'btn-visible neon-light' : 'btn-hidden'
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
              
                <div className='frame-overlay' id={`overlay-${index}`}>
                <div className='project_detail'>
                  <h1 className='projectAim'>Project Aim <br/>& <br/>Used Tools</h1>
                  <h3 className="project_description">{link.description}</h3>
                  <div className="project_tool_group">
                    {link.tools.map((tools) => (
                    <div className='project_tools'><div className='toolsName'>{tools}</div></div>
                  ))}
                  </div>
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
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
