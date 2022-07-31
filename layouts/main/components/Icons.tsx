import React from "react";
import { IconType } from "react-icons";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin,BsSunFill ,BsArrowUpShort } from "react-icons/bs";
import {MdDarkMode,MdMenu} from "react-icons/md"
const Icons: React.FC = () => {
  return <></>;
};
export default Icons
export const MyIcons: {
  [key: string]: IconType;
} = {
  facebook: BsFacebook,
  github: BsGithub,
  instagram: BsInstagram,
  linkedin: BsLinkedin,
  moon:MdDarkMode,
  sun:BsSunFill,
  menu:MdMenu,
  upArrow:BsArrowUpShort,
};
