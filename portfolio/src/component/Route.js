import React from 'react';
import Home from '../Home/Home.js'
import Project from '../Project/project.js'
import Skills from '../Experience/Skills.js'
import {BiHomeAlt} from 'react-icons/bi'
import {GiSkills} from 'react-icons/gi'
import {PiProjectorScreenChartFill} from 'react-icons/pi'
export const myRoute = [
    {
        id:1,
        title: "Home",
        element: <Home/>,
        icon: <BiHomeAlt/>
    },
    {
        id:2,
        title: "Project",
        element:<Project/>,
        icon:<PiProjectorScreenChartFill/>
    },
    {
        id:3,
        title: "Skills", 
        element:<Skills/>,
        icon:<GiSkills/>
    }
];


