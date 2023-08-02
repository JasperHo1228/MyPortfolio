import React from 'react';
import '../style/Experience/skills.css';

const Onion = () => {


  return (
    <svg className="onion-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496.653 600">
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
         
        {/* Layers */}
        <path className="left-first-layer" 
         d="M248.326,0.726c-32,88-222.4,160-245.6,278.4c-23.2,120.6,105.6,216.8,236.8,216.8c3.2,0,9.6,0,9.6,0 V0.726H248.326z"/>
        <path className="left-second-layer" d="M248.326,42.326c-32,75.2-189.6,136-209.6,237.6c-20,100,90.4,184.8,201.6,184.8c2.4,0,8,0,8,0 V42.326z" />
        <path className="left-third-layer" d="M248.326,81.526c-24,63.2-148.8,114.4-164.8,199.2c-16,84,71.2,155.2,159.2,155.2c2.4,0,6.4,0,6.4,0 v-354.4H248.326z" />
        <path className="left-fourth-layer" d="M248.326,143.126c-16,44.8-105.6,80.8-116.8,141.6c-11.2,60,50.4,109.6,112.8,109.6c1.6,0,4,0,4,0 V143.126z" />
        <path className="left-fifth-layer" d="M248.326,207.926c-8,27.2-64,48.8-70.4,85.6c-6.4,36,30.4,66.4,68,66.4c0.8,0,2.4,0,2.4,0 V207.926z" />
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
