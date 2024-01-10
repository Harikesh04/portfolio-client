import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


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
