
import AR_APP from '../asset/picture_source/project_icon/AR-APP.jpg';
import CM_system from '../asset/picture_source/project_icon/CMS-system.jpg';
import holidayApp from '../asset/picture_source/project_icon/holidayApp.jpg';

export const project_json = [
       {
        id:1,
        image:AR_APP,
        title: <div>AR Route Map<br/>iOS APP</div>,
        description:"Creating a wayfinding path in AR style that " +
                     "allow user easily find their way around "+
                     "the University campus.",
        youtube_link: "https://www.youtube.com/watch?v=UBDnyYBA4eU",
        source_code:"https://github.com/JasperHo1228/AR_Navigation-Uni_Leeds-",
        tools:["ARkit","Mapkit","UIkit","CoreLocation","Cocoapods"]
       },
       {   
        id:2,
        image: CM_system,
        title: <div>Customer Managment<br/>System</div>,
        description:"This software system is for people who is working as an admin to easily manage customer data.",
        youtube_link: "https://youtu.be/Ribh8SJNaic",
        youtube_link2:"https://youtu.be/LUfA0d6VwHI",
        source_code:"https://github.com/JasperHo1228/Customer-Account-Managment",
        tools:["Spring Boot","JavaScript","Thymeleaf","CSS",
       "MySQL"]
       },
       {
        id:3,
        image: holidayApp,
        title: <div>Holiday Searching<br/>App</div>,
        description:"This application is to help people to filter up all the holiday that they want to know.",
        youtube_link: "https://youtu.be/49q6aCrweT8",
        source_code:"https://github.com/JasperHo1228/UK_HolidaySearchApp",
        tools:["Spring Boot","Bootstraps","Thymeleaf","H2 Database"]
       }
];