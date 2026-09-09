import React, { useEffect, useState } from "react";
import "../style/experience.css";
import { experience_json } from "./experience_json";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { ImCross } from "react-icons/im";

import scrollAnimation from "../component/scrollAnimation";
import {
  handleMoreDetailClickAnimation,
  handleClosingDetailInfo,
} from "../component/moreInfoAnimation";

function Experience() {
  useEffect(() => {
    scrollAnimation(
      "animate-timeline",
      ".timeline-container",
      0.3
    );

    scrollAnimation(
      "animate-container",
      ".observe-container",
      0.5
    );
  }, []);

  const [openStates, setOpenStates] = useState(
    experience_json.map(() => false)
  );

  const handleMoreInfoClick = (index) => {
    const newOpenStates = [...openStates];

    newOpenStates[index] = !newOpenStates[index];

    setOpenStates(newOpenStates);

    handleMoreDetailClickAnimation(
      "text-box",
      index,
      "moreInfoVisible",
      "contribution"
    );
  };

  const handleInfoClose = (index) => {
    const newOpenStates = [...openStates];

    newOpenStates[index] = false;

    setOpenStates(newOpenStates);

    handleClosingDetailInfo(
      "text-box",
      index,
      "contribution",
      "moreInfoVisible"
    );
  };

  return (
    <section
      className="timeline_experience timeline-container"
      id="Experience"
    >
      <h1>
        <div className="red-title">Experience</div>
      </h1>

      <div className="main-experience-container">
        {experience_json.map((element, index) => {
          const isWorkIcon = element.icon === "workIcon";

          return (
            <div
              className={`experience_container ${element.position} observe-container`}
              key={element.id}
            >
              <div className="experienceIcon">
                {isWorkIcon ? <MdWork /> : <IoSchool />}
              </div>

              <div
                className="text-box"
                id={`text-box-${index}`}
              >
                <button
                  type="button"
                  className={`Experience_closebtn ${
                    openStates[index] ? "btn-visible" : ""
                  }`}
                  onClick={() => handleInfoClose(index)}
                  aria-label="Close experience details"
                >
                  <ImCross />
                </button>

                <div className="experience-card-header">
                  <span className="experience-label">
                    {isWorkIcon ? "WORK" : "EDUCATION"}
                  </span>

                  <h2 className="experience-title">
                    {element.title}
                  </h2>

                  <h3 className="experience-subtitle">
                    {element.subtitle}
                  </h3>

                  <p className="experience-date">
                    {element.date}
                  </p>
                </div>

                <button
                  type="button"
                  className="TapMebtn"
                  onClick={() => handleMoreInfoClick(index)}
                >
                  &gt; view.details()
                </button>

                <div
                  className="experience-contribution"
                  id={`contribution-${index}`}
                >
                  <div className="contribution-terminal">
                    &gt; {isWorkIcon ? "responsibilities" : "achievements"}()
                  </div>

                  {element.contribution}
                </div>

                <span className={element.arrow}></span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;