// Corrected skill data and asset paths
import react from '../asset/picture_source/project_icon/Software_Tool/Frontend/react.svg';
import javascript from '../asset/picture_source/project_icon/Software_Tool/Frontend/javascript.svg';
import html from '../asset/picture_source/project_icon/Software_Tool/Frontend/html.svg';
import css from '../asset/picture_source/project_icon/Software_Tool/Frontend/css.svg';
import thymeleaf from '../asset/picture_source/project_icon/Software_Tool/Frontend/thymeleaf.svg';
import uikit from '../asset/picture_source/project_icon/Software_Tool/OtherTech/uikit.svg';
import swiftui from '../asset/picture_source/project_icon/Software_Tool/OtherTech/swiftui.svg';

import java from '../asset/picture_source/project_icon/Software_Tool/Backend/java.svg';
import spring from '../asset/picture_source/project_icon/Software_Tool/Backend/springboot.svg';
import restApi from '../asset/picture_source/project_icon/Software_Tool/Backend/restApi.svg';

import mysql from '../asset/picture_source/project_icon/Software_Tool/DbAndMessage/mysql.svg';
import hibernate from '../asset/picture_source/project_icon/Software_Tool/DbAndMessage/hibernate.svg';
import rabbitmq from '../asset/picture_source/project_icon/Software_Tool/DbAndMessage/rabbitmq.svg';

import intellij from '../asset/picture_source/project_icon/Software_Tool/ToolAndDevOps/intellij.svg';
import postman from '../asset/picture_source/project_icon/Software_Tool/ToolAndDevOps/postman.svg';
import gitlab from '../asset/picture_source/project_icon/Software_Tool/ToolAndDevOps/gitlab.svg';
import vscode from '../asset/picture_source/project_icon/Software_Tool/ToolAndDevOps/vscode.svg';

import python from '../asset/picture_source/project_icon/Software_Tool/OtherTech/python.svg';

const skillsData = [
  {
    title: 'Frontend',
    skillItem: [
      { name: 'React', icon: react, alt: 'React' },
      { name: 'JavaScript', icon: javascript, alt: 'JavaScript' },
      { name: 'HTML', icon: html, alt: 'HTML' },
      { name: 'CSS', icon: css, alt: 'CSS' },
      { name: 'Thymeleaf', icon: thymeleaf, alt: 'Thymeleaf' },
    ],
  },

  {
    title: 'Backend',
    skillItem: [
      { name: 'Java', icon: java, alt: 'Java' },
      { name: 'Spring Boot', icon: spring, alt: 'Spring Boot' },
      { name: 'REST API', icon: restApi, alt: 'REST API' },
    ],
  },

  {
    title: 'Database & Messaging',
    skillItem: [
      { name: 'MySQL', icon: mysql, alt: 'MySQL' },
      { name: 'Hibernate', icon: hibernate, alt: 'Hibernate' },
      { name: 'RabbitMQ', icon: rabbitmq, alt: 'RabbitMQ' },
    ],
  },

  {
    title: 'Tools & DevOps',
    skillItem: [
      { name: 'GitLab', icon: gitlab, alt: 'GitLab' },
      { name: 'Postman', icon: postman, alt: 'Postman' },
      { name: 'IntelliJ IDEA', icon: intellij, alt: 'IntelliJ IDEA' },
      { name: 'VS Code', icon: vscode, alt: 'Visual Studio Code' },
    ],
  },

  {
    title: 'Other Technologies',
    skillItem: [
      { name: 'Python', icon: python, alt: 'Python' },
      { name: 'SwiftUI', icon: swiftui, alt: 'SwiftUI' },
      { name: 'UIKit', icon: uikit, alt: 'UIKit' },
    ],
  },
];

export default skillsData;
