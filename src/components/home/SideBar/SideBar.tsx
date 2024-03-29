import React from "react";
import Image from "next/image";
import Profile from "../../../../public/assets/profile.jpg";
import { sidebar_data, social_media_data } from "@/constant/sidebar_static_data";
import Link from "next/link";

interface SidebarProps {
  activeSection: string | null;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const handleScroll = (id: string) => {
    const anchor = document.querySelector(`#${id}`);

    anchor && anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="py-10 ml-5 w-full md:w-[25vw] lg:w-[20vw] h-full flex items-end">
      <div className="bg-tertiary flex flex-col p-7 h-full rounded-3xl mx-auto max-w-max ">
        <div>
          <Image
            src={Profile}
            width={100}
            height={100}
            priority={true}
            placeholder="blur"
            style={{
              borderRadius: "100%",
              borderColor: "white",
              borderWidth: "2px",
              width: 100,
              overflow: "hidden",
            }}
            alt="Picture of the author"
          />
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="text-white font-extrabold text-2xl">Harikesh</span>
              <span className="bg-secondary mt-2 rounded-full overflow-hidden w-3 h-3 "></span>
            </div>
            <p className="text-white uppercase text-xs	">Engineer & Innovator</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 ">
          {sidebar_data.map((item, index) => (
            <div
              className={`flex items-center gap-5 border-l-[3px] ${
                activeSection === item.to
                  ? "text-secondary border-blue-600"
                  : "text-white"
              } px-2 py-1  border-tertiary  transition duration-300 `}
              key={index}
            >
              <item.icon
                className={`text-xl ${
                  activeSection === item.to
                    ? "text-secondary"
                    : "text-white"
                } transition duration-300`}
              />
              <span className="cursor-pointer" onClick={() => handleScroll(item.to)}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-8 md:mt-32">
          {social_media_data.map((item, index) => (
            <div
              className="flex cursor-pointer w-9 h-9 rounded-full justify-center items-center py-2 group"
              key={index}
            >
              <Link href={item.to} className="bg-secondary rounded-full p-2 group-hover:bg-white transition-all duration-300">
                <item.icon className="text-white text-xl group-hover:text-secondary transition-all duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
