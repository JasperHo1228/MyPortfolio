import React, { useEffect, useReducer, useRef } from 'react';
import '../style/skills.css';
import '../style/onion.css';

import Onion from '../component/onion.jsx';
import LayerData from './skill_json';
import scrollAnimation from '../component/scrollAnimation.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const initialState = {
  showMotto: true,
  clickedLayer: null,
};

const allStatus = (state, action) => {
  switch (action.type) {
    case 'CLICK_ONION_LAYER':
      return {
        ...state,
        showMotto: false,
        clickedLayer: action.index,
      };

    case 'CLICK_OUTSIDE_ONION':
      return {
        ...state,
        showMotto: true,
        clickedLayer: null,
      };

    default:
      return state;
  }
};

function Skills() {
  const [state, dispatch] = useReducer(
    allStatus,
    initialState
  );

  const hasAnimatedRef = useRef(false);
  const onionRef = useRef(null);

  const handleClickOnionLayer = (layerIndex) => {
    dispatch({
      type: 'CLICK_ONION_LAYER',
      index: layerIndex,
    });
  };


  useEffect(() => {
    if (hasAnimatedRef.current) {
      return;
    }

    scrollAnimation(
      'onion-appear-animation',
      '.onion-container',
      0.6
    );

    scrollAnimation(
      'mottto-appear-animate',
      '.motto-container',
      0.3
    );

    hasAnimatedRef.current = true;
  }, []);

  /*
   * Animate the motto again when
   * returning from a skill panel.
   */
  useEffect(() => {
    if (state.showMotto) {
      scrollAnimation(
        'mottto-appear-animate',
        '.motto-container',
        0
      );
    }
  }, [state.showMotto]);

  return (
    <section
      className="skill-container"
      id="Skills"
    >

    <h1>
      <div className="red-title">Skills</div>
    </h1>

      <div className="skillset-content">

        <div
          className="onion-wrapper"
          ref={onionRef}
        >
          <div className="onion-img onion-container">

            <Onion
              layers={LayerData}
              handleClickOnionLayer={
                handleClickOnionLayer
              }
              clickedLayer={state.clickedLayer}
              showMotto={state.showMotto}
            />

          </div>
        </div>

        {state.showMotto && (
          <div className="motto motto-container">

            <div className="motto-terminal">
              <span className="terminal-symbol">
                &gt;
              </span>

              <span className="terminal-text">
                software.skills()
              </span>
            </div>

            <h2>
              Layers of skills,
              <br />
              just like an onion.
            </h2>

            <p>
              Click a layer to explore my
              technical stack.
            </p>

          </div>
        )}


        {!state.showMotto && (
          <div className="eachLayerContent">

            {LayerData.map((layer, index) => {

              if (state.clickedLayer !== index) {
                return null;
              }

              const skills =
                layer.content?.skillItem || [];

              return (
                <div
                  key={index}
                  className={`skill-panel ${layer.SkillclassName}`}
                >

                  <div className="skill-panel-header">

                    <span className="skill-panel-index">
                      0{index + 1}
                    </span>

                    <div>
                      <span className="skill-panel-label">
                        SKILL LAYER
                      </span>

                      <h2>
                        {layer.content?.title}
                      </h2>
                    </div>
                    <button
                        className="skill-panel-back"
                        onClick={() =>
                          dispatch({
                            type: 'CLICK_OUTSIDE_ONION',
                          })
                        }
                        aria-label="Back to skills"
                      >
                       ← Back
                      </button>
                  </div>


                  <div className="skillToolContainer">

                    {skills.map(
                      (toolItem, itemIndex) => (

                        <div
                          className="toolsItem"
                          data-tool={toolItem.name && toolItem.name.toLowerCase().replace(/\s+/g, '-')}
                          key={itemIndex}
                        >

                          <div className="tool-icon">

                            <LazyLoadImage
                              src={toolItem.icon}
                              alt={
                                toolItem.alt ||
                                toolItem.name
                              }
                              effect="blur"
                            />

                          </div>

                          <span className="toolsName">
                            {toolItem.name}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>

    </section>
  );
}

export default Skills;
