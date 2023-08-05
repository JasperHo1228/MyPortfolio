import React, { useState,useEffect,useRef } from 'react';
import '../style/Experience/skills.css';
import Onion from '../component/onion.js';
import LayerData from '../Experience/skill_json';

function Skills() {

  const [showMotto, setShowMotto] = useState(true);
  const [clickedLayer, setClickedLayer] = useState(null);
  
  const onionRef = useRef(null);
  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener('click', handleOutsideClick);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  const handleClickOnionLayer = (layerIndex) => {
    setClickedLayer(layerIndex);
    setShowMotto(layerIndex === null); 
  };

  const handleOutsideClick = (event) => {
    if (!onionRef.current.contains(event.target)) {
      setShowMotto(true);
      setClickedLayer(null);
    }
  };

  return (
    <div className="skill-container" id="Skills">
     <h1><div className="red-title">Skills</div></h1> 
      <div className="skillset-content">
        <div className="onion-img"  ref={onionRef}>
          <Onion layers={LayerData} 
           handleClickOnionLayer={handleClickOnionLayer}
           clickedLayer={clickedLayer}
           />
        </div>
        
        {showMotto && (
          <div className="motto" >
            <h3>Software development:<br/> 
               <div className="motto-content">
                Layers of Skills, Just Like an Onion!
                </div>
            </h3>
            <div className='Click-hints'>

                  <click>
                    Click each layer<br /> 
                    of the left half onion to view stack skills.
                  </click>
              </div>
          </div>
        )}
    
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
                         <img src={toolItem.icon} alt="Skill Icon" />
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
