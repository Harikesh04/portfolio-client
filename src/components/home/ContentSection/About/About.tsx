
import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";
import Button from "@/components/ui/Button";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import Profile from "../../../../../public/assets/profile.jpg";
import Image from "next/image";
import { about_data } from "@/constant/content_static_data";
import { handleCollaborate, handleDownload } from "@/helper/contactHandler";
import {motion} from "framer-motion"
import { fadeInUpAnimation } from "@/components/framer-motion/variants";

interface AboutSectionProps{
  innerRef:React.MutableRefObject<null>;

} 

const About = ({innerRef}:AboutSectionProps) => {
  return (
    <SectionCardWrapper altered={true}>
      <div id='about'  ref={innerRef} className=" flex justify-center   w-full  flex-col items-start p-12 ">
        <div>
          <p className="text-3xl text-white  font-bold mb-2">{about_data.title}</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>
        <div className="flex  w-full flex-col md:flex-row my-10  lg:my-20 items-center gap-5  md:items-start">
          <Image
            src={Profile}
            width={150}
            height={150}
            placeholder="blur"
            className="rounded-full"
            style={{
              borderRadius: "50%",
              width: 150,
              height: 150,
              borderColor:'white', borderWidth:'2px'
            }}
            alt="Picture of the author"
          />

          <div className=" md:ml-8   text-center md:text-left">
            <motion.p {...fadeInUpAnimation} className="text-2xl text-secondary font-bold mb-4">{about_data.intro}</motion.p>
            <div className="md:text-left text-center ">
              {about_data.description.split("\n").map((paragraph, index) => (
                <motion.p {...fadeInUpAnimation} key={index} className="text-white leading-relaxed mb-2">
                  {paragraph}
                </motion.p>
              ))}
            </div>
            <motion.div {...fadeInUpAnimation} className="flex md:justify-start  justify-center gap-6 mt-5">
            <Button onClick={handleDownload}>
              <MdOutlineCloudDownload size={24} />
              Download CV
            </Button>
            <Button   onClick={handleCollaborate} btnType={'secondary'}  >
              <MdMailOutline size={24} />
              Collaborate
            </Button>
          </motion.div>
          </div>
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default About;
