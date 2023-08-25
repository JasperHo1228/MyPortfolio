import React, { useState,useEffect } from 'react';
import '../style/project.css';
import { project_json } from './project_json';
import {ImCross} from 'react-icons/im';
import scrollAnimation from '../component/scrollAnimation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { handleMoreDetailClickAnimation, handleClosingDetailInfo } from '../component/moreInfoAnimation';

//overlay function 
const FrameOverlay = ({link, index}) => {
  return(
    <div className='frame-overlay' id={`overlay-${index}`}>
     <div className='project_detail' >
      <h1 className='projectAim'>Project Aim <br/>& <br/>Used Tools</h1>
      <h3 className="project_description">{link.description}</h3>
      <div className="project_tool_group">
        {link.tools.map((tools,toolIndex) => (
        <div className='project_tools' key={toolIndex}><div className='toolsName'>{tools}</div></div>
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
          key={link.id}
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
  );
}

function Project() {
  const projects = [...project_json];

  const [openStates, setOpenStates] = useState(project_json.map(() => false));
  //track the change on the page
  useEffect(() => {
    // timeline should run first so threshold should be smaller
    scrollAnimation('animate-frame','.frame-container',0.3);
     // Remove event listener when component unmounts
  }, []);
  

  const handleMoreDetailClick = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    handleMoreDetailClickAnimation('frame', index, 'overlay-visible', 'overlay');
    setOpenStates(newOpenStates);
  };
  
  //close animation
  const handleOverlayClose = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = false
    handleClosingDetailInfo('frame', index ,'overlay','overlay-visible');
    setOpenStates(newOpenStates);
  };
  
  return (
    <div className='project' id='Project'>
      <h1><div className='green-title'>Project</div></h1>
      <div className='project-container'>
        {projects.map((link, index) => (
          <div className='frame frame-container'
          id={`frame-${index}`}
          key={link.id}>
            <div className='project_item'>
              <div className='project_img'>
                <div className={`closebtn 
                    ${openStates[index] ? 'btn-visible' : 'btn-hidden'}`}
                    onClick={()=>handleOverlayClose(index)}>
                    <ImCross/>
                </div>     
                <LazyLoadImage src={link.image} className='projectImg' alt={link.alt} effect='blur'/>
              </div>
              <div className='project_link'>
                <div className='title'>
                  <h3>{link.title}</h3>
                </div>
              </div>
              
              <div className='project_link_2'>
                <div className="detailbtn" 
                  onClick={() => handleMoreDetailClick(index)}>
                   <div className="gradient-text">
                        More Detail
                    </div>
                </div>
              </div>

            {/* overlay function */}
            <FrameOverlay className='frame-cover' link={link} index={index}/>
           
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
