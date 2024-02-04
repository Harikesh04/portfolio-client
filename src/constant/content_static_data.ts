import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import zintlr from "../../public/assets/zintlr.jpeg";
import Kylo from "../../public/assets/kylo.jpeg";
import MAS from "../../public/assets/mas.jpeg";
import Matlync from "../../public/assets/matlync.jpeg";
import { TTechnology } from "@/types";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import docker from "../assets/tech/docker.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";
import aws from "../assets/tech/aws.png";
import next from "../assets/tech/next.png";
import sql from "../assets/tech/sql.png";

export const home_data = {
  title: "I’m Harikesh Singh",
  discription:
    "Full-stack Engineer and open-source contributor . Passionate about technology and a fitness enthusiast.",
};

export const about_data = {
  title: "About Me",
  intro: "Hello World! 👋",
  description: `🚀 Full Stack Engineer with 2 years of experience . Passionate about creating seamless user experiences for challenging projects. Let's collaborate and craft something extraordinary together! 🌟`,
};

export const contact_data = {
  title: "Get in touch 🤝",
  description: "Let's create something together 🚀",
  contact_info: [
    {
      title: "Email me at",
      icon: MdEmail,
      value: "singhharikesh294@gmail.com",
    },
    {
      title: "Location",
      icon: FaLocationDot,
      value: "India",
    },
  ],
  contact_form: [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      required: true,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "Subject",
      name: "subject",
      type: "text",
      required: true,
    },
    {
      label: "Message",
      name: "message",
      type: "textArea",
      required: true,
    },
  ],
};

export const experience_data = {
  title: "Work Experience.",
  description: "what i have done so far",
  experiences: [
    {
      title: "Software Engineer Intern",
      companyName: "Zintlr",
      date: "Sep 2023 - Present",
      icon: zintlr,
      points: [
        "Driving frontend excellence with Next.js, React.js, and Redux Toolkit for superior user experiences at Zintlr.",
        "Leading the development of Microlab's Regmark360 from the ground up, creating cutting-edge user interfaces.",
      ],
    },
    {
      title: "Software Engineer Intern",
      companyName: "Kylo Apps",
      date: "May 2023 - Aug 2023",
      icon: Kylo,
      points: [
        "Contributed to the GlobalDBi SAAS Product, which consists of a B2B database. Developed a module that generates wallet credits using Stripe Payment Gateway, enabling users to download the B2B data.",
        "Contributed to Viosa, an educational marketplace for courses. Specialized in the product 'Interview Pro' for interview practice and assignments. Implemented Razorpay Payment Gateway for seamless and secure course purchases. Utilized AI Credits as a unique payment option for the resume creation service.",
      ],
    },

    {
      title: "Software Engineer Intern",
      companyName: "My Analytics School",
      icon: MAS,
      date: "Nov 2022 - May 2023",
      points: [
        "Worked with the founding team to develop and take the app to production and launched MAS Dashboard.",
        "Spearheaded e-learning platform enhancement with React JS, Tailwind CSS, and Redux on the frontend, coupled with Spring Boot, PostgreSQL, and Google Sheets API on the backend, integrating a responsive chatbot and user engagement analytics in MAS Dashboard and MAS.",
        "Learned AWS and successfully handled all aspects of deployment on the platform (EC2, RDS, EBS, ROUTE53, Hostinger) ensuring optimal uptime and scalability, while also optimizing a WordPress blog for improved user experience and organic traffic growth.",
      ],
    },
    {
      title: "Software Engineer Intern ",
      companyName: "Matlync",
      date: "Sep 2022 - Nov 2022",
      icon: Matlync,
      points: [
        "Integrated Paytm Payment and implemented Admin Reply, Reviews & Ratings for Matlync.",
        "Built components and pages for XRStudios website using React.js.",
      ],
    },
  ],
};

export const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "AWS",
    icon: aws,
  },
  {
    name: "My SQL",
    icon: sql,
  },
  {
    name: "Figma",
    icon: figma,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];
