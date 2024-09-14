import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    canva,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    github,
    git,
    meta,
    google,
    starbucks,
    tesla,
    shopify,
    CryptoApp,
    weather,
    AgeCalculator,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Video Editor",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Canva",
      icon: canva,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Github",
      icon: github,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },

  ];
  const educations=[
    {
      title: "B.Tech - Computer Science and Engineering",
       company_name: "IIMT College of Engineering",
       marks: "7.49 - Cgpa",
      iconBg: "#E6DEDD",
      date: "2020 - 2024",
      points: [
        "Blending tech expertise with a creative edge, specializing in frontend development, animation, and design.",
        "Skilled in turning complex challenges into visually appealing and functional digital solutions.",
        " Merging computer science with artistic flair, bringing fresh perspectives to software development and content creation.",
        "Ready to leverage skills in programming, design, and content creation to make a mark in the tech industry.",
      ],
    },
    {
      title: "Intermediate",
      company_name: "Dr. VSTCS",
      marks: "89%",
     iconBg: "#E6DEDD",
     date: "2018 - 2019",
     points: [
       "Passed Class 12 with excellent grades, demonstrating strong dedication and hard work.",
       "Active member of the school’s Tech Club, gaining hands-on experience in video editing and tech innovations.",
       " Won multiple academic and debate competitions, showcasing strong analytical and communication skills.",
       "Combined passion for technology and creativity through active participation in school events and projects.",
     ],
    },
    {
      title: "High School",
      company_name: "Dr. VSTCS",
      marks: "91.4%",
     iconBg: "#E6DEDD",
     date: "2016 - 2017",
     points: [
       " Achieved high grades in Class 10, demonstrating a solid academic foundation.",
       "Successfully hosted the school’s annual event, showcasing leadership and public speaking skills and was actively engaged in various tech and non-tech events, building a well-rounded skill set.",
       "Earned recognition in an inter-school writing competition, highlighting creativity and strong communication.Awarded a medal in sports, reflecting dedication, teamwork, and athletic interest.",
     ],
    },
  ];
  const experiences = [
    
    {
          title: "Video Editor",
          company_name: "Google Developer Student Clubs",
          icon: google,
          iconBg: "#E6DEDD",
          date: "July 2023 - July 2024",
          points: [
            "The core member working under content creation and designing.",
            "Designed promotional materials and videos for a major event, enhancing engagement and increasing attendance and coordinated with team members to ensure timely delivery of high-quality content.",
            "Utilized design and video editing skills to create compelling visual and multimedia content and supported event planning and execution tasks, including logistics and coordination.",
          
          ],
        },
        {
          title: "Frontend Developer",
          company_name: "InternPe",
     
          iconBg: "#E6DEDD",
          date: "June 2023 - June 2024",
          points: [
            " Gained hands-on experience in web development, specializing in building responsive, user-friendly applications.",
            "Developed multiple JavaScript-based web applications with API integrations, enhancing interactivity and functionality.",
            "Expanded knowledge in modern technologies and frameworks, staying updated with industry trends and best practices.",
            "Tackled real-world challenges, translating complex requirements into visually appealing, efficient web solutions.",
          ],
        },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cryptocurrency Website",
      description:
        "Web-based platform responsive site using State Managemnt using Axios, UI creation using AntDesign and creating charts using Charts.js.Fetching data from multiple sources using RapidApi showing real time news and data with line graphs statistics.",
        
        
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "github",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name:"api",
          color:"blue-text-gradient",
        },
      ],
      image: CryptoApp,
      source_code_link: "https://tejasvi2708.github.io/Cryptocurrency",
    },
    {
      name: "Weather Web App",
      description:
        "Web application that enables users to search for real time weather using Vanilla Javascript, HTML5 and CSS3 using Openweather API which gives the information acoording to the city all across the world.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://tejasvi2708.github.io/Weather-App/",
    },
    {
      name: "Age Calculator",
      description:
        "A comprehensive web application which tells the present age of the user with responsive and dynamic layout using Vanilla Javascript.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "github",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:AgeCalculator,
      source_code_link: "https://tejasvi2708.github.io/Age-Calculator/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations };