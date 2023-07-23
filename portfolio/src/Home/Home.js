import React, { useState, useEffect } from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import CV from '../asset/CV/Jasper.pdf'
import '../style/index.css'
function Home(){
    const [text] =  useTypewriter({
        words:['my name is Jasper!', 'I am a Software Developer'],
        loop:true,
        typeSpeed:120,
        deleteSpeed:80
      });
    
      const [cursorVisible, setCursorVisible] = useState(true);

      const [topic] = useTypewriter({
        words:['Hello World,'],
        loop:1,
        typeSpeed:100,
      });
    
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
            <div className="App">
                 <h1 className="Topic">
                    <span>{topic}</span>
                    {cursorVisible && <span className="cursorTopic" style={{ color: 'blue' }}><Cursor cursorStyle = "|" /></span>}
                 </h1>
                 <h2 className='subTitle'>
                    <span>{text}</span>
                    <span style={{'color':'#00BE67'}}><Cursor cursorStyle='|'/></span>
                </h2>
                
               <p className='content'>
                                          With a passion for high quality
                                          innovation app development, specifically tackling suitable problems.<br/>
                                          My interest is to investage real world problem, then solving it by using software solution.
               </p>
               <a href={CV} download className='Download_CV'>Download My CV</a>
            </div>
          );
}
export default Home;