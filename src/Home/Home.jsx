import React, { useState, useEffect } from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import '../style/home.css'

function Home(){
    const [text] =  useTypewriter({
        words:['Jasper', 'a Software Developer'],
        loop:true,
        typeSpeed:120,
        deleteSpeed:80
      });
      
      //for topic cursor
      const [cursorVisible, setCursorVisible] = useState(true);

      const [topic] = useTypewriter({
        words: ["Hello World, I'm"],
        loop:1,
        typeSpeed:100,
      });
      
      //when topic status change useEffect function while be running.
      useEffect(() => {
        const typingDuration = topic.length; 
        // After the typing animation is completed, set the cursor to transparent
        const timeout = setTimeout(() => {
          setCursorVisible(false);
        }, typingDuration + 110);

        // Clear the timeout when the component re-renders or unmounts
        return () => clearTimeout(timeout);
        }, [topic]);

        return (
            <div className="home-container" id="Home">
              <div className="home-wrapper">
                 <h1 className="Topic">
                   <span>{topic}</span>
                   {cursorVisible && <span className="cursorTopic" style={{ color: '#F500BD' }}><Cursor cursorStyle = "|" /></span>}
                 </h1>
                 <h2 className='subTitle'>
                    <span>{text}</span>
                    <span style={{'color':'#00BE67'}}><Cursor cursorStyle='|'/></span>
                </h2>
                
               <p className='content'>   
                                     A Developer who enjoys turning complex problems into simple,<br/>
                                     reliable software solutions. With 2+ years of experience in Java and Spring Boot, I build<br/> 
                                     backend systems and solve real-world challenges through practical, maintainable code.
               </p>
                  
                  </div>
            </div>
 
          );
}
export default Home;

