import { HiOutlineHome } from "react-icons/hi";
import { SlUser } from "react-icons/sl";
import { GoProjectSymlink } from "react-icons/go";
import { TbSchool } from "react-icons/tb";
import { CiPenpot } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";





export const sidebar_data = [
  {
    icon: HiOutlineHome,
    title: "Home",
    to:"home",
  },
  {
    icon: SlUser,
    title: "About",
    to:"about",
  },
  {
    icon: GoProjectSymlink,
    title: "Projects",
    to:"projects",
  },
  {
    icon: TbSchool,
    title: "Experience",
    to:'experience'
  },
  {
    icon: CiPenpot,
    title: "Skills",
    to:'skills'
  },
  {
    icon: IoCallOutline,
    title: "Contact",
    to:'contact'
  },
];

export const social_media_data = [
  {
    to: "https://twitter.com/singhharikesh_",
    icon:FaXTwitter,
    title: "twitter",
  },
  {
    to: "https://github.com/Harikesh04",
    icon:FaGithub,
    title: "github",
  },
  {
    to: "https://www.linkedin.com/in/singhharikesh",
    icon:FaLinkedin,
    title: "linkedIn",
  },
  {
    to: "https://www.instagram.com/harikeshsingh_",
    icon:FaInstagram,
    title: "instagram",
  },
];
