import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  mobilestyx,
  neoscript,
  paytm,
  rode,
  shopify,
} from "../assets";
import OpenFashion from "../assets/projects/OpenFashion.png"

import concira from "../assets/concira.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const skills = [
  {
    title: "HTML5",
    icon: html,
  },
  {
    title: "CSS3",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React.js",
    icon: reactjs,
  },
  {
    title: "Redux.js",
    icon: redux,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "Node.js",
    icon: nodejs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company_name: "Concira",
    icon: concira,
    iconBg: "#FFF",
    date: "April 2024 - Present",
    points: [
      `Developed cutting-edge home automation dashboard application using ReactJS, TailwindCSS from ground up, utilizing <span>WebSockets and MQTT to ensure real-time data synchronization and seamless device control.`,
      "Solely researched, architected, and implemented the Role-Based Access Control (RBAC) system in backend using ExpressJs for a dashboard to be used in a luxury hotel, establishing robust security protocols and scalable access control for a high-profile, demanding environment..",
      "Implemented protected routes and RBAC functionality on the frontend, delivering a secure, seamless user experience with precise access control based on user roles.",
      "Seamlessly integrated complex APIs and real-time WebSocket data to enhance the dashboard’s functionality, ensuring seamless communication between IoT devices and hotel management systems.",
      "Engineered and integrated a Hotel Management System (HMS) to the dashboard application, transforming it into a commercially viable product that expanded the company’s market offerings.",
      "Developed and deployed REST APIs for a notes app in ExpressJs and Realtime Firebase within the dashboard application, expanding the platform’s feature set and improving user functionality.",
      "Worked with AWS EC2 and Amplify for cloud deployment and infrastructure management, assisting with platform scalability and improving system availability",
      "Hands-on experience with Git for version control, collaborating effectively in team environments and maintaining a well-organized codebase.",
      "Actively participated in high-level discussions on architecture and database schema design, ensuring the implementation of scalable, efficient, and future-proof systems."
    ],
  },
 
];

export const projects = [
  {
    name: "Paytm Clone",
    description:
      "Creating a Paytm clone using HTML, CSS, and Tailwind CSS involves building a responsive user interface that mimics Paytm's design.Implement key features like transaction cards and a payment form for a visually appealing.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: paytm,
    source_code_link: "https://github.com/robinmahto/Paytm-Clone",
    live_link: "https://paytm-clone-tailwindcss-16.netlify.app/"
  },
  {
    name: "Open Fashion",
    description:
      "Designed and developed a full-stack e-commerce web application with features like login, signup, wishlist, cart, and product browsing. Implemented RESTful APIs using ExpressJs, and utilized React with Redux for state management, styled with Tailwind CSS.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: OpenFashion,
    source_code_link: "https://github.com/rahulmeher23/Ecommerce_profile.fyi",
    live_link: "https://open-fashion-app.netlify.app/"
  },
  {
    name: "Shopify Clone",
    description:
      "Crafting a Shopify clone with HTML, CSS, and Tailwind CSS for a responsive and visually appealing online store interface. Utilize Tailwind CSS utility classes for rapid styling, and HTML for organizing product listings and cart functionalities.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: shopify,
    source_code_link: "https://github.com/robinmahto/Shopify-Clone",
    live_link: "https://shopify-clone-tailwindcss-18.netlify.app/"
  },
];
