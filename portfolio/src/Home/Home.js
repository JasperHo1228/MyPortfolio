import React, { useState, useEffect } from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

function Home(){
    const [text] =  useTypewriter({
        words:['Hello, I am Jasper!', 'A Software Developer'],
        loop:true,
        typeSpeed:120,
        deleteSpeed:80
      });
    
      const [cursorVisible, setCursorVisible] = useState(true);

      const [topic] = useTypewriter({
        words:['HELLO WORLD'],
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
                    <span style={{'color':'blue'}}><Cursor cursorStyle='|'/></span>
                </h2>
            </div>
          );
}
export default Home;