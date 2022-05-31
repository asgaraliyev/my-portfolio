import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import type { IconType } from "react-icons";
import { useRouter } from "next/router";

interface Props {}
interface FooterOneRowLiProps {
  Icon?: IconType;
  title: string;
  onClick?: () => void;
}
function FooterOneRowLi({ Icon, title, onClick }: FooterOneRowLiProps) {
  return (
    <li className="text-primary-lighter my-10 cursor-pointer">
      <a onClick={onClick}>
        <span className="flex flex-row items-center ">
          {Icon ? (
            <Icon
              className=" text-primary-darker dark:text-primary-lighter"
              width={10}
              height={10}
            />
          ) : null}
          <span className="mx-2 text-primary-darker dark:text-primary-lighter text-lg">
            {title}
          </span>
        </span>
      </a>
    </li>
  );
}

const Footer: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <footer className="w-ful border-t-2 border-primary-dark">
      {/* <div>Spotify</div> */}
      <div className="w-ful flex flex-row ">
        <ul className="w-1/3">
          <FooterOneRowLi
            title="Home"
            onClick={() => {
              router.push("/home");
            }}
          />
          <FooterOneRowLi
            title="Projects"
            onClick={() => {
              router.push("/projects");
            }}
          />
          <FooterOneRowLi
            title="Stats"
            onClick={() => {
              router.push("/stats");
            }}
          />
          <FooterOneRowLi
            title="Home"
            onClick={() => {
              router.push("/home");
            }}
          />
          <FooterOneRowLi
            title="Blogs"
            onClick={() => {
              router.push("/blogs");
            }}
          />
        </ul>
        <ul className="w-1/3">
          <FooterOneRowLi
            Icon={BsGithub}
            title="Github"
            onClick={() => {
              window.open("Github", "_blank");
            }}
          />
          <FooterOneRowLi
            Icon={BsLinkedin}
            title="Linkedin"
            onClick={() => {
              window.open("Linkedin", "_blank");
            }}
          />
          <FooterOneRowLi
            Icon={BsFacebook}
            title="Facebook"
            onClick={() => {
              window.open("Facebook", "_blank");
            }}
          />
          <FooterOneRowLi
            Icon={BsInstagram}
            title="Instagram"
            onClick={() => {
              window.open("Instagram", "_blank");
            }}
          />
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
