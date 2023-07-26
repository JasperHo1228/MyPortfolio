import React from 'react';
import '../style/project.css'
import { project_json } from './project_json';

function project(){
    const project = ([...project_json]); 
return(

        <div id="Project">
            <h1 className="project_title">Project</h1>
            <div className="project-container">
                {project.map((link) => (
                     <article className='project_item'>  
                         <div className='project_img'>
                            <img src={link.image} alt=""/>
                        </div>
                            <h3>{link.title}</h3>
                            <div className='project_link'>
                                <a href={link.youtube_link} className='btn' target="_blank" rel="noreferrer">Youtube Demo</a>
                                <a href={link.source_code} className='btn2' target="_blank" rel="noreferrer">Source Code</a>
                            </div>
                        
                      </article>
                ))}
            </div>
        </div>

);
}
export default project