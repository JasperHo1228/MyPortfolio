import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
function MySocialMedia(){
    return(
        <div className="social-contact">
           <a href="https://www.linkedin.com/in/tsun-yin-ho-46981222b/" className='linkedIn'><BsLinkedin/></a>
           <a href="https://github.com/JasperHo1228" className='github'><BsGithub/></a>
        </div>
    );
}

export default MySocialMedia;