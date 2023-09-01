import React, {useEffect,useRef,useReducer} from 'react';
import '../style/skills.css';
import Onion from '../component/onion.js';
import LayerData from './skill_json';
import scrollAnimation from '../component/scrollAnimation';
import { LazyLoadImage } from 'react-lazy-load-image-component';



// all status in skill function
const allStatus = (state, action) => {
  switch (action.type) {
    case 'CLICK_ONION_LAYER':
      return { ...state, showMotto: false, clickedLayer: action.index };

    case 'CLICK_OUTSIDE_ONION':
      return {  ...state, showMotto: true, clickedLayer: null };

    default:
      return state;
  }
};

function Skills() {
  const initialState = { showMotto: true, clickedLayer: null };
  const [state, dispatch] = useReducer(allStatus, initialState);

  //skill page area
  const hasAnimatedRef = useRef(false);

  //set the onion area
  const onionRef = useRef(null);
  
  const handleClickOnionLayer = (layerIndex) => {
    dispatch({type: 'CLICK_ONION_LAYER', index:layerIndex})
   };
 
   const handleOutsideClick = (event) => {
     if (!onionRef.current.contains(event.target)) {
       dispatch({ type: 'CLICK_OUTSIDE_ONION' });
     }
   };

  useEffect(() => {
    //make sure to run once only
    if (!hasAnimatedRef.current) {
      // Animation onion
      scrollAnimation('onion-appear-animation', '.onion-container', 0.6);
      // Animation motto
      scrollAnimation('mottto-appear-animate', '.motto-container', 0.3);
      hasAnimatedRef.current = true;
    }
  }, []);

  //get back motto after clicking outside the onion
  useEffect(() => {
      // Add event listener when component mounts
      document.addEventListener('click', handleOutsideClick);
      if (state.showMotto) {
        //get back the motto 
        scrollAnimation('mottto-appear-animate', '.motto-container', 0.0);
      // Remove event listener when component unmounts
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
      }
  }, [state.showMotto]);

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
      
        {state.showMotto ? 
          // show the motto
           (
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
          ):
          // show the skillset
          (
          <div className="eachLayerContent">
            {LayerData.map((layer, index) => (
              <div key={index} className={state.clickedLayer === index ? layer.SkillclassName : 'hidden'}>
                <h1>
                  <div className = "Skillset-title">
                    {layer.content.title}
                  </div>
                </h1>
                 <div className={`skillToolContainer ${layer.content.title === 'Soft Skills' ? 'soft-skills' : ''}`}>
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
        )
        }
      </div>
    </div>
  );
}

export default Skills;
