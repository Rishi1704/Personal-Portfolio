import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    // html,
    // css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    unity,
    unreal,
    autocad,
    cpp,
    // cHash,
    python,
    udghosh,
    iitk,
    vizuara,
    gdc,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      delay: "0.25",
    },
    {
      id: "work",
      title: "Work",
      delay: "0.5",
    },
    {
      id: "contact",
      title: "Contact",
      delay: "0.75",
    },
  ];
  
  const services = [
    {
      title: "Game Developer",
      icon: web,
    },
    {
      title: "Programmer",
      icon: mobile,
    },
    {
      title: "Frontend WebDeveloper",
      icon: backend,
    },
    {
      title: "Hockey Player",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Unreal",
      icon: unreal,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    // {
    //   name: "C#",
    //   icon: cHash,
    // },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "AutoCAD",
      icon: autocad,
    },
  ];
  
  const experiences = [
    {
      title: "Research Associate",
      company_name: "Industry 4.0",
      mentor: "Prof. Nalinaksh S. Vyas | IIT Kanpur",
      icon: iitk,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Development of Indigenous Industry 4.0 Software and Hardware Platform for Ordnance Production",
        "Implemented and Integrated Enterprise Resource Planing System to automate 350+ machine operations",
        "Installed cutting edge Radio Frequency Identificaiton on 15+ machines enabling inventory management",
        "Implemented Real Time-Machine Monitoring of 45+ tags by obtaining data through NI-OPC serves on LabView",
        "Improved overall Productivity by 30%, Diagnosis and maintainability along with Dynamic process planning",
      ],
    },
    {
      title: "Unity Game Developer",
      company_name: "Vizuara",
      icon: vizuara,
      iconBg: "#383E56",
      date: "April 2023 - June 2023",
      points: [
        "Development of high quality interactive digital textbooks at the intersection of Education and Gamification",
        "Developed robust, high-quality & engaging games utilizing Unity & Blender that made learning interactive",
        "Developed interactive 3D games within a 2-month time frame that led to Gamification of various concepts",
        "Elevated educational experience by delivering 4+ cutting edge 3D, gamified & interactive contents to schools",
      ],
    },
    {
      title: "Coordinator",
      company_name: "Game Development Club",
      icon: gdc,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Spearheaded a 3-tier team of 30+ members to organise club events, including workshops, sessions for campus community",
        "Received a funding of INR 1 Lakh+ from Vizuara as a result of successful Industrial Collaboration focused on developing educational games for school students",
        "Coordinated with Core Team to organize Semester Projects, for 100+ students focusing on topics like Anti-Cheat and AI",
        "Organized and facilitated engaging Game Jams fostering collaborative problem solving & creative thinking",
        "Effectively oversaw budgetary planning & resource allocation, skillfully optimising financial sustainability",
        "Nurtured talent through 10+ workshops, 5+ projects, and mentorship, driving notable skill developmen",
      ],
    },
    {
      title: "Web Organizer",
      company_name: "Udghosh'22",
      icon: udghosh,
      iconBg: "#383E56",
      date: "July 2022 - Oct 2022",
      points: [
        "Collaborated with a team of 10+ to gather requirements, design and develop the official website of Udghosh",
        "Designed and Developed from scratch all aspects of website making it user friendly and visually appealing",
        "Analyzed website’s performance & made data-driven changes to enhance its functionality & user experience",
        "Strategically elevated festival budget by 50 Lakh+ though website by attracting sponsorship and funding",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      // image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      // image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };