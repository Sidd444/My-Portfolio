import CW from "../assets/Projects/CW.png"
import GS from "../assets/Projects/GS.png"
import BC from "../assets/Projects/BC.png"
import BMS from "../assets/Projects/BMS.png"
import VBS from "../assets/Projects/VBS.png"
import EC from "../assets/Projects/EC.png"
import SRMS from "../assets/Projects/SRMS.png"
import OSS from "../assets/Projects/OSS.png"
import TS from "../assets/Projects/TS.png"


const projectData = [
    {
        heading:"Student Result Management System",
        description:"A Java Project to add and manage results of Students",
        image: SRMS,
        alt: "srms",
        tools:["Java", "Ant","JavaSwing", "MySQL"],
        about: ['Student Result Management System is a Java-based application designed to simplify the process of managing student information and their academic results. This project utilizes Apache NetBeans as the development environment, Java for coding, Ant for building, and MySQL for database management.' ],
        category: "Backend",
        demoLink:"https://github.com/Sidd444/Student_Result_Management_System"
    },
    {
        heading:"Online Shoe Store",
        description:"This is a simple online shoe store project built using React, React Router DOM, and Redux.",
        image: OSS,
        alt: "oss",
        tools:["HTML", "CSS", "JavaScript","React","Redux"],
        about: " Browse through a variety of shoe products.Add shoes to the cart.Remove shoes from the cart.Update shoe quantities in the cart.View the total price of the selected shoes in the cart." ,
        category: "Frontend",
        demoLink:"https://662f697f8f57870844a4e515--chimerical-kangaroo-7a229c.netlify.app/",
        githubLink:"https://github.com/Sidd444/State-Management-In-React-Using-Redux-ToolKit"
    },
    {
        heading:"Task Manager App",
        description:"A responsive and interactive React application where users can add, update and delete tasks.",
        image:TS,
        alt: "tm",
        tools:[ "Html","Css","Javascript","React"],
        about: "The tasks can be displayed based on their status in different columns.Updating a task status will move it to the required column.The application is responsive for mobile view." ,
        category: "Frontend",
        demoLink:"https://661563cfb6f88c117192f3e7--heartfelt-fudge-2084be.netlify.app/",
        githubLink:"https://github.com/Sidd444/task-manager-app"
    },
    {
        heading:"Course-website",
        description:"This project is a web application that utilizes React Router DOM for navigation between different pages ",
        image: CW,
        alt: "cw",
        tools:["Html","Css", "Javascript","React","React-Router-DOM","Tailwind"],
        about: "This project demonstrates the usage of React Router DOM for navigation within a web application. It includes pages for Home, Dashboard, Login, and Sign Up, allowing users to navigate seamlessly between them. Tailwind CSS is used for styling to achieve a responsive and visually appealing design." ,
        category: "Frontend",
        demoLink:"https://662351f2edda6b89de82e1fd--statuesque-piroshki-f9f192.netlify.app/",
        githubLink:"https://github.com/Sidd444/React-Router-DOM-Page-Navigation"
    },
    {
        heading:"Google Sheet Clone",
        description:"Clone of google sheet ",
        image: GS,
        alt: "GS",
        tools:["HTML","CSS","Javascript"],
        about: "A responsive web application that mimics the basic functionality of Google Sheets. Create, edit, and organize your data in a familiar spreadsheet format. This project is built using HTML, CSS, and JavaScript." ,
        category: "Frontend",
        demoLink:"https://sidd444.github.io/Google-Sheet-Clone/",
        githubLink:"https://github.com/Sidd444/Google-Sheet-Clone"
    },
    {
        heading:"Blinkit Clone",
        description:"Clone of blinkit using Html, Css and Javascript",
        image: BC,
        alt: "bc",
        tools:["Html","Css", "Bootstrap"],
        about: "This project is a clone of the Blinkit website, created using HTML, CSS, and Bootstrap. It replicates the core features and design of the original site, allowing users to experience how the blinkit website works ohe client side." ,
        category: "Frontend",
        demoLink:"https://sidd444.github.io/Blinkit-clone/",
        githubLink:"https://github.com/Sidd444/Blinkit-clone"
    },
      {
        heading:"Book Management System",
        description:"This is a SpringBoot Application for managing different books",
        image: BMS,
        alt: "BMS",
        tools:["Java", "SpringBoot","MySQL"],
        about: ['This project is a Book Management System implemented using Spring Boot. It allows users to manage books by performing CRUD operations through RESTful APIs.' ],
        category: "Backend",
        demoLink:"https://github.com/Sidd444/Book_Management_System"
    },
       {
        heading:"Vaccination Booking System",
        description:"This is a SpringBoot Application for managing vaccinations",
        image: VBS,
        alt: "VBS",
        tools:["Java", "SpringBoot","MySQL"],
        about: ['The Vaccination Booking System is a Spring Boot-based application designed to streamline the management of vaccination appointments and centers. It provides essential functionalities for both administrators and users to efficiently book vaccination appointments, track vaccination progress, and manage vaccination centers.' ],
        category: "Backend",
        demoLink:"https://github.com/Sidd444/Vaccination-Bookin-System"
    },
         {
        heading:"E-Commerce",
        description:"This is a SpringBoot Application to replicate functionalities of an E-Commerce Website",
        image: EC,
        alt: "e-commerce",
        tools:["Java", "SpringBoot","MySQL"],
        about: ['This Spring Boot project is an e-commerce platform designed to facilitate transactions between sellers and customers. It provides APIs for sellers to add their details and items, customers to add their details, manage their carts, and complete transactions.' ],
        category: "Backend",
        demoLink:"https://github.com/Sidd444/E-Commerce"
    },
    

]

export default projectData;
