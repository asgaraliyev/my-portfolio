import React from "react";
import { IconType } from "react-icons";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialIcons: React.FC = () => {
  return <></>;
};
export default SocialIcons
export const social_icons: {
  [key: string]: IconType;
} = {
  facebook: BsFacebook,
  github: BsGithub,
  instagram: BsInstagram,
  linkedin: BsLinkedin,
};
