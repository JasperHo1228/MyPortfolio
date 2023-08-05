import React from 'react';
import Home from '../Home/Home.js'
import Project from '../Project/project.js'
import Skills from '../Experience/Skills.js'
import Experience from '../Experience/experience.js'
import ContactMe from '../ContactMe/contactMe.js'
import {BiHomeAlt,BiSolidBriefcaseAlt2} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {PiProjectorScreenChartFill} from 'react-icons/pi'
import {MdContactMail} from 'react-icons/md'
export const myRoute = [
    {
        id:1,
        direct:"#Home",
        title: "Home",
        element: <Home/>,
        icon: <BiHomeAlt/>
    },
    {
        id:2,
        direct:"#Project",
        title: "Project",
        element:<Project/>,
        icon:<PiProjectorScreenChartFill/>
    },
    
    {
        id:3,
        direct:"#Experience",
        title: "Experience", 
        element:<Experience />,
        icon:<BiSolidBriefcaseAlt2/>
    },

    {
        id:4,
        direct:"#Skills",
        title: "Skills", 
        element:<Skills/>,
        icon:<GiSkills/>
    },

    {
        id:5,
        direct:"#ContactMe",
        title: "Contact Me", 
        element:<ContactMe/>,
        icon:<MdContactMail/>
    }
];


