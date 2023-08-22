import React, {useEffect,useRef,useReducer } from 'react';
import '../style/skills.css';
import Onion from '../component/onion.js';
import LayerData from './skill_json';
import scrollAnimation from '../component/scrollAnimation';
import { LazyLoadImage } from 'react-lazy-load-image-component';



// all status in skill function
const allStatus = (state, action) => {
  switch (action.type) {
    case 'CLICK_ONION_LAYER':
      return { showMotto: false, clickedLayer: action.index };

    case 'CLICK_OUTSIDE_ONION':
      return {  showMotto: true, clickedLayer: null };

    default:
      return state;
  }
};

function Skills() {
  const initialState = { showMotto: true, clickedLayer: null };
  const [state, dispatch] = useReducer(allStatus, initialState);

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
  });

  const handleClickOnionLayer = (layerIndex) => {
   dispatch({type: 'CLICK_ONION_LAYER', index:layerIndex})
  };

  const handleOutsideClick = (event) => {
    const svgBoundingBox = onionRef.current.getBoundingClientRect();
    const clickedInsideSVG = event.clientX >= svgBoundingBox.left &&
                             event.clientX <= svgBoundingBox.right &&
                             event.clientY >= svgBoundingBox.top &&
                             event.clientY <= svgBoundingBox.bottom;

    if (!clickedInsideSVG || state.clickedLayer === null) {
      dispatch({ type: 'CLICK_OUTSIDE_ONION' });
    }
  };
  
  return (
    <div className="skill-container" id="Skills">
     <h1><div className="red-title">Skills</div></h1> 
      <div className="skillset-content">
        <div className="onion-img onion-container"  ref={onionRef}>
          <Onion layers={LayerData} 
           handleClickOnionLayer={handleClickOnionLayer}
           clickedLayer={state.clickedLayer}
          showMotto={state.showMotto}
           />
        </div>
        
        {state.showMotto && (
           <div className= "motto motto-container">
            <h3>Software development:<br/> 
               <div className="motto-content">
                Layers of Skills, Just Like an Onion!
                </div>
            </h3>
            <div className='Click-hints'>
                  <div className='click'>
                   <span className='normal-hint'>Click each layer of the</span>  
                   <span className='left-half'> left half </span> 
                   <span className='normal-hint'>onion to view stack skills.</span>
                  </div>
              </div>
          </div>
        )
        }
    
        {!state.showMotto && (
          <div className="eachLayerContent">
            {LayerData.map((layer, index) => (
              <div key={index} className={state.clickedLayer === index ? layer.SkillclassName : 'hidden'}>
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
