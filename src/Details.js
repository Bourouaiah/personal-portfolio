import profile from "./assets/profile.png";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import expo from "./assets/techstack/expo.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import reactRouter from "./assets/techstack/react-router.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
import alGss from "./assets/projects/al-gss.png";
import fencingSport from "./assets/projects/fencing-sport.png";
import interno from "./assets/projects/interno.png";
import nikeShop from "./assets/projects/nike-shop.png";
import hooBank from "./assets/projects/hoo-bank.png";
import payper from "./assets/projects/payper.png";

export const personalDetails = {
  name: "Abdelaziz Bourouaiah",
  tagline: "I build things for web and app.",
  img: profile,
  about: `Studying at the Institute of Electrical and Electronic Engineering in Boumerdes. Skilled in building websites and apps using ReactJS and React Native. Good at managing time, solving problems, and working well with others. Like sharing ideas and knowledge with teammates.`,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/abdelaziz-bourouaiah-7a9ba1226/",
  github: "https://github.com/Bourouaiah",
  resume: "https://drive.google.com/file/d/1XkgiUSvxE3yk_syCzyEBThV3yvD2Nvjw/view?usp=sharing"
};

export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Chateer`,
    Location: "Boumerdes, Algeria",
    Type: "Remote",
    Duration: "October 2024 - Present",
  },
];

export const experienceDetails = [
  {
    Position: "Frontend Web Developement Mentor in WebDev version 3.0",
    Company: `Inelectronics student club`,
    Location: "Boumerdes, Algeria",
    Type: "Voluntary",
    Duration: "January 2023 - May 2023",
  },
  {
    Position: "Frontend Web Developement Mentor in WebDev version 4.0",
    Company: `Inelectronics student club`,
    Location: "Boumerdes, Algeria",
    Type: "Voluntary",
    Duration: "January 2024 - May 2024",
  },
];

export const eduDetails = [
  {
    Position: "Bachelor in Electronics & Electricity",
    Company: `Institute of Electrical and Electronics Engineers`,
    Location: "Boumerdes, Algeria",
    Type: "Full Time",
    Duration: "Sep 2021 - Jun 2024",
  },
  {
    Position: "Master's Degree in Computer Engineering",
    Company: `Institute of Electrical and Electronics Engineers`,
    Location: "Boumerdes, Algeria",
    Type: "Full Time",
    Duration: "Sep 2024 - Jun 2026",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  expo: expo,
  tailwind: tailwind,
  reactRouter: reactRouter,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

export const projectDetails = [
  {
    title: "Payper",
    image: payper,
    description: `Payper is a smart payment system where I led the software development, creating the website. It offers users a secure platform to manage accounts, conduct transactions, and access support services. Future plans include enhancing the website's features to meet evolving user needs.`,
    techstack: "React.js, React Router, Tailwind CSS, Email JS, Firebase",
    previewLink: "https://bourouaiah.github.io/payper/",
    githubLink: "https://github.com/Bourouaiah/payper",
  },
  {
    title: "AL-GSS",
    image: alGss,
    description: `The AL-GSS website is a multilingual platform in Arabic, French, and English, highlighting the company's expertise in oil and gas services. It emphasizes AL-GSS's pivotal role in Algeria's industrial landscape with a user-friendly, responsive design.`,
    techstack: "React.js, Tailwind CSS, Email JS",
    previewLink: "https://al-gss.com/",
    githubLink: "https://github.com/Bourouaiah/lourscorp",
  },
  {
    title: "Nike shop",
    image: nikeShop,
    description: `The Nike Shop is a web application created as a learning project to explore Redux and Tailwind CSS. The website offers a virtual shopping experience where users can browse a collection of Nike shoes and make purchases directly from the site.`,
    techstack: "React.js, Redux Toolkit, Tailwind CSS.",
    previewLink: "https://nike-shop-inky.vercel.app/",
    githubLink: "https://github.com/Bourouaiah/nike-shop",
  },
  {
    title: "Algerian fencing federation",
    image: fencingSport,
    description: `The Algerian Fencing Federation website is a dynamic platform created to showcase the sport of fencing in Algeria. It features sections on athletes, competitions, news, and more, providing a comprehensive view of the fencing scene in the country.`,
    techstack: "React.js, React Router, Tailwind CSS.",
    previewLink: "https://fencing-sport.vercel.app/",
    githubLink: "https://github.com/Bourouaiah/fencing-sport",
  },
  {
    title: "Hoo bank",
    image: hooBank,
    description: `Hoo Bank is a React application developed to showcase advanced styling skills using Tailwind CSS. The project aims to create a modern and visually appealing user interface for a fictional banking application.`,
    techstack: "React.js, Tailwind CSS, Vite.",
    previewLink: "https://hoo-bank-ruby-six.vercel.app/",
    githubLink: "https://github.com/Bourouaiah/hoo-bank",
  },
  {
    title: "Interno",
    image: interno,
    description: `A web design project showcasing advanced styling skills using a Figma design. Translates complex designs into functional, visually appealing websites, emphasizing attention to detail and frontend development proficiency.`,
    techstack: "React.js, Next.js, Tawilwind CSS",
    previewLink: "https://interno-eight.vercel.app/",
    githubLink: "https://github.com/Bourouaiah/interno",
  },
];

export const contactDetails = {
  email: "abdoubrh26@gmail.com",
  phone: "+213 553 32 91 64",
};
