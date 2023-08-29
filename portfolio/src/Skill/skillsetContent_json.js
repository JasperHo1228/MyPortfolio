// frontend icon
import react from '../asset/picture_source/project_icon/Software_Tool/Frontend/react.svg';
import javascript from '../asset/picture_source/project_icon/Software_Tool/Frontend/javascript.svg'
import html from '../asset/picture_source/project_icon/Software_Tool/Frontend/html.svg'
import css from '../asset/picture_source/project_icon/Software_Tool/Frontend/css.svg'
import thymeleaf from '../asset/picture_source/project_icon/Software_Tool/Frontend/thymeleaf.svg'
import swiftUI from '../asset/picture_source/project_icon/Software_Tool/Frontend/swiftui.svg'
import uiKit from '../asset/picture_source/project_icon/Software_Tool/Frontend/uikit.svg'

// backend icon
import java from '../asset/picture_source/project_icon/Software_Tool/Backend/java.svg'
import spring from '../asset/picture_source/project_icon/Software_Tool//Backend/springboot.svg'
import mysql from '../asset/picture_source/project_icon/Software_Tool/Backend/mysql.svg'
import python from '../asset/picture_source/project_icon/Software_Tool/Backend/python.svg'
import pytorch from '../asset/picture_source/project_icon/Software_Tool/Backend/pytorch.svg'

//IDE
import intellij from '../asset/picture_source/project_icon/Software_Tool/IDE/intellij.svg'
import eclipse from '../asset/picture_source/project_icon/Software_Tool/IDE/eclipse.svg'
import vscode from '../asset/picture_source/project_icon/Software_Tool/IDE/vscode.svg'
import xcode from '../asset/picture_source/project_icon/Software_Tool/IDE/xcode.svg'
import jupyter from '../asset/picture_source/project_icon/Software_Tool/IDE/jupyter.svg'
import pycharm from '../asset/picture_source/project_icon/Software_Tool/IDE/pycharm.svg'

//devops
import agile from '../asset/picture_source/project_icon/Software_Tool/DevOps/agile.svg'
import git from '../asset/picture_source/project_icon/Software_Tool/DevOps/git.svg'
import scrum from '../asset/picture_source/project_icon/Software_Tool/DevOps/scrum.svg'


//soft skill
import create from '../asset/picture_source/project_icon/Software_Tool/SoftSkill/innovation.svg'
import solve from '../asset/picture_source/project_icon/Software_Tool/SoftSkill/problem-solving.svg'
import communication from '../asset/picture_source/project_icon/Software_Tool/SoftSkill/communication.svg'
import time from '../asset/picture_source/project_icon/Software_Tool/SoftSkill/time-management.svg'

const skillsetContent_json = [
    {
        title:"Frontend",
        skillItem:[
            {
                icon:react,
                name:"React"
            },
            {
                icon:javascript,
                name:"JavaScript"
            },
            {
                icon:html,
                name:"HTML"
            },
            {
                icon:css,
                name:"CSS"
            },
            {
                icon:thymeleaf,
                name:"Thymeleaf"
            },
            {
                icon:swiftUI,
                name:"SwiftUI"
            },
            {
                icon:uiKit,
                name:"UIkit"
            }
        ],
    },
    {
        title:"Backend",
        skillItem:[
            {
                icon:java,
                name:"Java"
            },
            {
                icon:spring,
                name:"Spring Boot"
            },
            {
                icon:mysql,
                name:"MySQL"
            },
            {
                icon:python,
                name:"Python"
            },
            {
                icon:pytorch,
                name:"Pytorch"
            },
        ],
    },
    {
        title:"IDE",
        skillItem:[
            {
                icon:intellij,
                name:"IntelliJ"
            },
            {
                icon:vscode,
                name:"VSCode"
            },
            {
                icon:eclipse,
                name:"Eclipse"
            },
            {
                icon:jupyter,
                name:<div>Jupyter<br />Notebook</div>
            },
            {
                icon:pycharm,
                name:"PyCharm"
            },
            {
                icon:xcode,
                name:"Xcode"
            },
        ],
    },
    {
        title:"DevOps",
        skillItem:[     
            {
                icon:agile,
                name:"Agile"
            },
            {
                icon:scrum,
                name:"Scrum"
            },
            {
                icon:git,
                name:"Git"
            },
        ],
    },
    {
        title:"Soft Skills",
        skillItem:[
            {
                icon:time,
                name:<div>Time<br/>Management</div>
            },
            {
                icon:solve,
                name:<div>Problem<br/>Solving</div>
            },
            {
                icon:communication,
                name:<div>Communication<br/>Skills</div>
            },
            {
                icon:create,
                name:<div>Creative<br/>Skills</div>
            },
        ]
    }
]

export default skillsetContent_json;