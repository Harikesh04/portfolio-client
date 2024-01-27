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
    "Full-stack Engineer and open-source contributor with a commitment to advancing humanity. Passionate about technology, enjoys experimenting with keyboards, and a fitness enthusiast.",
};

export const about_data = {
  title: "About Me",
  intro: "🚀 Hello World! ",
  description: `I'm Harikesh, a dynamic force with an insatiable drive to transform lives. Fueled by purpose and determination, I'm on a mission to create a profound impact on humanity.
  
  💡 Innovation is my playground, problem-solving is my forte! I thrive in dynamic environments, delivering nothing short of extraordinary results. With a solid background in architectural design, I craft solutions that not only meet but exceed client expectations.
  
  🏗️ Architecting the Future: I'm not just designing buildings; I'm creating robust and scalable solutions that pave the way for a brighter tomorrow.
  
  🤝 Team Whisperer: I have a knack for leading and managing teams, fostering collaboration that turns projects into success stories.
  
  🌐 Tech Enthusiast: Always on the cutting edge, I'm constantly learning and staying ahead with emerging technologies. Ready to dive into future projects, I'm geared up to make a meaningful impact and drive success.
  
  Ready to embark on an innovation journey together?`,
  
};

export const contact_data={
  title:"Get in touch 🤝",
  description:"Let's create something together 🚀",
  contact_info:[
    {title:'Email me at',
     icon:MdEmail,
     value:'singhharikesh294@gmail.com'
  

    },{
      title:'Location',
      icon:FaLocationDot,
      value:'India',
    }
  ],
  contact_form:[
    {
      label: "Full Name",
      name:'name',
      type: "text",
      required: true,
      
    },
    {
      label:'Email Address',
      name:'email',
      type: "email",
      required: true,

    },
    {
      label:'Subject',
      name:'subject',
      type: "text",
      required: true,

    },
    {
      label:'Message',
      name:'message',
      type: "textArea",
      required: true,

    }
  ]


}


export const experience_data = {
  title: 'Work Experience.',
  description:'what i have done so far',
  experiences: [
    {
      title: "Software Engineer Intern",
      companyName: "Zintlr",
      icon: zintlr,
      date: "Sep 2023 - Present",
      points: [
        "Currently driving frontend excellence at Zintlr, enhancing Zintlr products using Next.js, React.js, and Redux Toolkit for superior user experiences.",
        "Building Microlab's Regmark360 from the ground up, a system to be utilized by thousands of employees.",
        "Leading the frontend development with React.js, Next.js, Tailwind CSS, and Redux Toolkit to deliver cutting-edge user interfaces and ensure exceptional user experiences.",
        "Utilizing best practices and optimization techniques to implement highly optimized code."
      ],
    },
    {
      title: "Software Engineer Intern",
      companyName: "Kylo Apps",
      icon: Kylo,
      date: "May 2023 - Aug 2023",
      points: [
        "Led end-to-end development to deployment of Glocal admin panel, Vyap admin panel from inception to launch.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Managed diverse projects employing React JS, Redux Toolkit, CSS, Tailwind CSS, Firebase, and various JavaScript libraries.",
        "Enhanced Glocal's offerings by implementing chat, community, and proficiently executed payment integration with PayPal and Stripe, along with user post features like comment, reply, etc.",
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
      title: "Software Engineer Intern",
      companyName: "Matlync",
      icon: Matlync,
      date: "Sep 2022 - Nov 2022",
      points: [
        "Integrated Paytm Payment, implemented Admin Reply, Reviews & Ratings.",
        "Built multiple components and pages for the XRStudios website using React.js, in accordance with the specified requirements.",
      ],
    },
  ],
};


export const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html.src,
  },
  {
    name: "CSS 3",
    icon: css.src,
  },
  {
    name: "JavaScript",
    icon: javascript.src,
  },
  {
    name: "TypeScript",
    icon: typescript.src,
  },
  {
    name: "React JS",
    icon: reactjs.src,
  },
  {
    name: "Next JS",
    icon: next.src,
  },
  {
    name: "Redux Toolkit",
    icon: redux.src,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind.src,
  },
  {
    name: "Node JS",
    icon: nodejs.src,
  },
  {
    name: "MongoDB",
    icon: mongodb.src,
  },
  {
    name: "AWS",
    icon: aws.src,
  },
  {
    name: "My SQL",
    icon: sql.src,
  },
  {
    name: "Figma",
    icon: figma.src,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs.src,
  // },
  {
    name: "git",
    icon: git.src,
  },
  {
    name: "docker",
    icon: docker.src,
  },
];