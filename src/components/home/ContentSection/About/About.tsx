
import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";
import Button from "@/components/ui/Button";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import Profile from "../../../../../public/assets/profile.jpg";
import Image from "next/image";
import { about_data } from "@/constant/content_static_data";
import { handleCollaborate, handleDownload } from "@/helper/contactHandler";

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
        <div className="flex  w-full flex-col md:flex-row items-center gap-5  md:items-start">
          <Image
            src={Profile}
            width={150}
            height={150}
            priority={true}
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
            <p className="text-2xl text-secondary font-bold mb-4">{about_data.intro}</p>
            <div className="text-left ">
              {about_data.description.split("\n").map((paragraph, index) => (
                <p key={index} className="text-white px-4 leading-relaxed mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex  gap-6 mt-5">
            <Button onClick={handleDownload}>
              <MdOutlineCloudDownload size={24} />
              Download CV
            </Button>
            <Button   onClick={handleCollaborate} btnType={'secondary'}  >
              <MdMailOutline size={24} />
              Collaborate
            </Button>
          </div>
          </div>
        </div>
      </div>
    </SectionCardWrapper>
  );
};

export default About;
