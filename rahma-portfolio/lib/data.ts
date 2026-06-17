import React from "react";
import {
  Code2,
  Layout,
  Database,
  Github,
  Terminal,
  Linkedin,
  Twitter,
  Cloud,
  Brain,
  Cpu,
  Blocks,
} from "lucide-react";
import type {
  Experience,
  PersonalInfo,
  Project,
  Skill,
  SocialLink,
  Education,
  LearningItem,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Rahma Zaki",
  role: "Front-End Developer | React & Next.js Developer",
  email: "rahmazaki261@gmail.com",
  availability: true,
  bio: "Crafting elegant solutions through code",
  resumeUrl: "/projects/cv/rahmaZakiCV.pdf",

  location: "Egypt",
};

export const skills: Skill[] = [
  {
    name: "Programming Languages",
    icon: Layout,
    description: "Proficient in multiple programming languages",
    technologies: [
      "Python",
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript" ,
      "Node.js,",
      "Django",
    ],
  },
  {
    name: "Web Development",
    icon: Code2,
    description: "Building responsive and user-friendly web applications",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "Tailwind CSS"],
  },
  {
    name: "Database",
    icon: Database,
    description: "Data management",
    technologies: [ "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Other",
    icon: Terminal,
    description: " Additional expertise",
    technologies: ["GitHub", "Git", "Linux"],
  },
];

export const projects: Project[] = [
  {
    title: "Bash-DBMS",
description: `A simple Database Management System (DBMS) 
implemented using Bash scripting. 
This project demonstrates basic database management functionalities using shell scripting.`,

    image: "/projects/bash.jpg",
    technologies: ["shell"],
    github: "https://github.com/nadaahmed2001/Bash-DBMS",
    live: "#",
    category: "Backend",
  },
  {
    title: "Goodreads-App",
    description: "A modern Goodreads-inspired web application that helps users discover, track, and review books effortlessly. Built with MERN for seamless performance.",
    image: "/projects/goodreads.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Vercel", "Railway"],
    github: "https://github.com/nadaahmed2001/Goodreads-App",
    live: "https://goodreads-app.vercel.app/",
    category: "Fullstack",
  },
  {
    title: "ITI_Hub",
    description: "The ITI Social Media Website (ITIHub) is a platform designed to enhance communication collaboration, and networking among ITI students.",
    image: "/projects/iti.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS" , "Django" , "SQLite" ,"PostgreSQL" , "Vercel" , "Railway"],
    github: "https://github.com/nadaahmed2001/ITI_Social_Media_Website_Frontend", 
    live: "https://iti-social-media-website-frontend.vercel.app",
    category: "Fullstack",
  },
  {
    title: "Point of Sale (POS) Dashboard",
    description: "This system involves creating a user login, selecting the branch (specifically the branch), choosing a new shift and its associated shift, selecting the products and quantities for each customer, applying discounts, and finally checking if the customer is registered or new (adding their details). Finally, an invoice is generated for the customer",
    image: "/projects/foodstage.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Context API", "Custom Hook"],
    github: "https://github.com/areez-co/foodstage",
    live: "https://new.foodstage.co/",
    category: "Frontend",
  },
  {
    title: "student-portal-manar-college",
    description: "Designed and developed a full-featured student portal that streamlines access to academic and administrative services. The platform allows students to manage their university experience efficiently by providing access to lecture schedules, exam timetables, fee invoices, academic information, and important university announcements. The system focuses on usability, accessibility, and delivering a seamless digital experience for students",
    image: "/projects/manar.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Context API", "Custom Hook"],
    github: "https://github.com/areez-co/student-portal-manar-college",
    live: "",
    category: "Frontend",
  },
   {
    title: "aloola-student-portal",
    description: "Designed and developed a full-featured student portal that streamlines access to academic and administrative services. The platform allows students to manage their university experience efficiently by providing access to lecture schedules, exam timetables, fee invoices, academic information, and important university announcements. The system focuses on usability, accessibility, and delivering a seamless digital experience for students",
    image: "/projects/aloola.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Context API", "Custom Hook"],
    github: "https://github.com/areez-co/aloola-student-portal",
    live: "#",
    category: "Frontend",
  },
   {
    title: "kawader-portal",
    description: "Designed and developed an internal HR portal that digitizes employee service requests and automates workflow approvals. The platform enables employees to request leave, salary advances, resignation processing, and other HR services in an efficient and structured way. It improves communication between employees and HR departments while ensuring transparency and faster processing of requests",
    image: "/projects/kawader.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Context API", "Custom Hook"],
    github: "https://github.com/areez-co/kawader-portal",
    live: "#",
    category: "Frontend",
  },
    {
    title: "promaster-dashboard-react",
    description: "Built a centralized platform that enables users to submit and track different types of service requests with role-based approval workflows, real-time status updates, and an intuitive dashboard for efficient request handling.",
    image: "/projects/promaster.png",
technologies: ["React.js", "JavaScript", "Tailwind CSS", "Context API", "Custom Hook"],
    github: "https://github.com/areez-co/promaster-dashboard-react",
    live: "#",
    category: "Frontend",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Junior Front-End Developer | React.js & Next.js",
    company: "Areez information Tech",
    location: "Nasr City, Egypt",
    status:  "Full-time",
period: "Jul 2025 - Present",
    description: [
      "Building smart, high-performance solutions using modern tech stack",
      "Creating scalable and user-friendly applications for business growth",
      "Implementing future-proof systems with latest technologies",
      "Working on-site as part of the development team",
    ],
    skills: [ "React.js", "TypeScript",  "JavaScript", "Tailwind CSS"],
    color: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
    link: "https://www.areez.co/",
  },
];

// export const education: Education[] = [

//   {
//     id: 2,
//     title: "Professional Bachelor in Information Technology",
//     institution: "Université Abdelmalek Essaâdi Tétouan",
//     period: "Sep 2022 - Jul 2023",
//     description:
//       "Bachelor's degree focused on advanced computer science and software development",
//   },
//   {
//     id: 3,
//     title: "Higher Technician Diploma (BTS) in Information Technology",
//     institution: "Preparatory class of Lissane Eddine Ibn Al-Khatib",
//     period: "2020 - 2022",
//     description:
//       "Technical diploma with focus on programming and network administration",
//   },
// ];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rahmazaki",
    icon: Github,
    color: "group-hover:text-[#333] group-hover:bg-white/90",
    description: "Code repositories",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rahmazaki",
    icon: Linkedin,
    color: "group-hover:text-white group-hover:bg-[#0077b5]",
    description: "Professional profile",
  },
  // {
  //   name: "X",
  //   url: "https://x.com/ZeinabM26028258",
  //   icon: Twitter,
  //   color: "group-hover:text-white group-hover:bg-[#0077b5]",
  //   description: "Social media presence",
  // },
];

export const navigationLinks = [
  { name: "Home", href: "#top" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

// export const currentlyLearning: LearningItem[] = [
//  {
//   title: "Odoo Development",
//   description:
// "Currently learning Python and exploring Odoo development. Building basic ERP applications and gaining foundational knowledge in module customization, business workflows, and system integration." , 
//  progress: 30,
//   startedDate: "2025",
//   icon: Database,
// } ,
//  {
//   title: "AI Automation",
//   description:
//     "Currently learning AI automation with n8n, focusing on building automated workflows, connecting APIs, and streamlining processes to improve efficiency and productivity.",
//   progress: 15,
//   startedDate: "2025",
//   icon: Brain,
// },

// ];
