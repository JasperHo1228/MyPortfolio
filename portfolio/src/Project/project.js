import React from 'react';
import '../style/project.css'
import { project_json } from './project_json';

function project(){
    const project = ([...project_json]); 
return(
        <div className='project' id="Project">
            <h1 className="page_title">Project</h1>
            <div className="project-container">
                {project.map((link) => (
                    <div className='frame'>
                     <div className='project_item'>  
                         <div className='project_img'>
                            <img src={link.image} alt=""/>
                        </div>

                        <div className='project_link'>
                            <div className='title'>
                                <h3>{link.title}</h3>
                            </div>
                            </div>
                            <div className='project_link'> 
                                <a href={link.youtube_link} className='btn' target="_blank" rel="noreferrer">Youtube Demo</a>
                                <a href={link.source_code} className='btn2' target="_blank" rel="noreferrer">Source Code</a>
                            </div>
                      </div>
                    </div>
                ))}
            </div>
        </div>

);
}
export default project