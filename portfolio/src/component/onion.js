import React from 'react';
import '../style/Experience/skills.css';
const Onion = ({ layers,handleClickOnionLayer,clickedLayer}) => {


  return (
    <svg className="onion-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.653 700">
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        {/* Layers */}
        {
          layers.map((layer,index) => (
            <path key={index} 
            className={`${layer.className} ${index === clickedLayer ? 'active-layer ' : ''}`}
              d={layer.path}
              onClick={() => handleClickOnionLayer(index)}
           />
          ))
        }
        
        <path className="right-first-layer" d="M248.326,0.726c32,88,222.4,160,245.6,278.4c23.2,117.6-105.6,216.8-236.8,216.8c-3.2,0-9.6,0-9.6,0 V0.726H248.326z" />
        <path className="right-second-layer" d="M248.326,0.726c16,88,122.4,160,135.2,278.4c12.8,117.6-58.4,216.8-130.4,216.8c-1.6,0-4.8,0-4.8,0 L248.326,0.726L248.326,0.726z" />
        <path className="right-third-layer" d="M248.326,0.726c8,88,44,160,48.8,278.4c4.8,117.6-20.8,216.8-47.2,216.8c-0.8,0-1.6,0-1.6,0 L248.326,0.726L248.326,0.726z" />

        {/* Connecting arcs  Mxxxc is control y coordinate */ }
        <path className="left-arc1" d="M248.326,495c-40,0-40,56-80,56"  stroke="#E2ACD1" strokeWidth="6" strokeLinecap="round" />
        <path className="left-arc2" d="M248.326,495c-16,0-16,56-32,56"  stroke="#D193C1" strokeWidth="6" strokeLinecap="round" />
        <path className="right-arc1" d="M248.326,495c40,0,40,56,80,56"  stroke="#a92a7c" strokeWidth="6" strokeLinecap="round" />
        <path className="right-arc2" d="M248.326,495c16,0,16,56,32,56"  stroke="#b95498" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default Onion;
