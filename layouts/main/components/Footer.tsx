import React from "react";
import type { IconType } from "react-icons";
import { useRouter } from "next/router";
import { useAppSelector } from "../../../hooks";
import { selectTheme } from "../../../store/slices/themeSlice";
import { icons, MyIcons } from "./Icons";
import { motion } from "framer-motion";
interface Props {}
interface FooterOneRowLiProps {
  Icon?: IconType;
  title: string;
  onClick?: () => void;
}
function FooterOneRowLi({ Icon, title, onClick }: FooterOneRowLiProps) {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-primary-lighter my-10 cursor-pointer"
    >
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
    </motion.li>
  );
}

const Footer: React.FC<Props> = () => {
  const router = useRouter();
  const themeState = useAppSelector(selectTheme);
  return (
    <footer className="w-ful border-t-2 border-primary-dark p-2">
      <div className="w-ful flex flex-row ">
        <ul className="w-1/3">
          {themeState.menu.map((item) => {
            return (
              <FooterOneRowLi
                key={item.path}
                title={item.title}
                onClick={() => {
                  router.push(item.path);
                }}
              />
            );
          })}
        </ul>
        <ul className="w-1/3">
          {themeState.social.map((item) => {
            return (
              <FooterOneRowLi
                key={item.path}
                Icon={MyIcons[item.icon_name]}
                title={item.title}
                onClick={() => {
                  window.open(item.path, "_blank");
                }}
              />
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
