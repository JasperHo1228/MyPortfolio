import React, { useState,useEffect,useRef } from 'react';
import '../style/skills.css';
import Onion from '../component/onion.js';
import LayerData from './skill_json';
import scrollAnimation from '../component/scrollAnimation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Skills() {

  const [showMotto, setShowMotto] = useState(true);
  const [clickedLayer, setClickedLayer] = useState(null);
  //set the onion area
  const onionRef = useRef(null);

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener('click', handleOutsideClick);
    //animation onion
    const onion_img = scrollAnimation('onion-appear-animation','.onion-container',0.6);
    //animation motto
    const motto = scrollAnimation('mottto-appear-animate','.motto-container',0.3);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      onion_img.disconnect();
      motto.disconnect();
    };
  }, );


  const handleClickOnionLayer = (layerIndex) => {
    setClickedLayer(layerIndex);
    setShowMotto(layerIndex === null); 
  };

  const handleOutsideClick = (event) => {
     //when you are not clicking the onion then trigger inside the condition
    if (!onionRef.current.contains(event.target)) {
      setShowMotto(true);
      setClickedLayer(null);
    }
  };
  
  return (
    <div className="skill-container" id="Skills">
     <h1><div className="red-title">Skills</div></h1> 
      <div className="skillset-content">
        <div className="onion-img onion-container"  ref={onionRef}>
          <Onion layers={LayerData} 
           handleClickOnionLayer={handleClickOnionLayer}
           clickedLayer={clickedLayer}
           />
        </div>
        
        {showMotto && (
           <div className= "motto motto-container">
            <h3>Software development:<br/> 
               <div className="motto-content">
                Layers of Skills, Just Like an Onion!
                </div>
            </h3>
            <div className='Click-hints'>
                  <div className='click'>
                   <span className='normal-hint'>Click each layer of the</span>  <span className='left-half'>LEFT HALF </span> 
                   <span className='normal-hint'>onion to view stack skills.</span>
                  </div>
              </div>
          </div>
        )
        }
    
        {!showMotto && (
          <div className="eachLayerContent">
            {LayerData.map((layer, index) => (
              <div key={index} className={clickedLayer === index ? layer.SkillclassName : 'hidden'}>
                <h1>
                  <div className = "Skillset-title">
                    {layer.content.title}
                  </div>
                </h1>
                    <div className = "skillToolContainer">
                       {layer.content.skillItem.map((toolItem, index) => (
                      <div className="toolsItem" key={index}>
                         <LazyLoadImage src={toolItem.icon} alt={toolItem.alt} effect='blur'/>
                          <div className='toolsName'>{toolItem.name}</div>
                      </div>
                    ))} 
                    </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Skills;
