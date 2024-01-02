import React from "react";
import SectionCardWrapper from "../SectionCardWrapper";
import Button from "@/components/ui/Button";
import { MdOutlineCloudDownload } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import Profile from "../../../../../public/assets/profile.jpg";
import Image from "next/image";
import { about_data } from "@/constant/content_static_data";

const About = () => {
  return (
    <SectionCardWrapper altered={true}>
      <div className="h-[90vh] flex flex-col items-start p-6 ">
        <div>
          <p className="text-3xl font-bold mb-2">{about_data.title}</p>
          <div className="bg-secondary rounded-full h-2 w-8 mb-8"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start">
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
              borderColor:'#0065ff', borderWidth:'2px'
            }}
            alt="Picture of the author"
          />

          <div className="md:ml-8 text-center md:text-left">
            <p className="text-lg font-bold mb-4">{about_data.intro}</p>
            <div className="text-left">
              {about_data.description.split("\n").map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex  gap-6 mt-5">
            <Button >
              <MdOutlineCloudDownload size={24} />
              Download CV
            </Button>
            <Button btnType={'primary'}  >
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
