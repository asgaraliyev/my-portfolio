import Image from "next/image";
import Link from "next/link";
import MyProfilePhoto from "../../../assets/my-photos/my-profile.webp";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { selectTheme, toggleDarkMode } from "../../../store/slices/themeSlice";
interface Props {}

function LeftSide() {
  return (
    <div>
      <Image
        width={50}
        height={50}
        src={MyProfilePhoto}
        priority={true}
        alt="Asgar Aliyev's profile photo"
        className="rounded-full object-cover"
      ></Image>
    </div>
  );
}
interface MenuItemProps {
  title: string;
  path: string;
}
function MenuItem({ title, path }: MenuItemProps) {
  return (
    <li className="mx-10 font-bold text-primary-darker dark:text-primary-lighter">
      <Link href={path}>{title}</Link>
    </li>
  );
}

function MiddleSide() {
  return (
    <ul className="flex justify-center justify-between items-center">
      <MenuItem title="Home" path="/home" />
      <MenuItem title="Projects" path="/projects" />
      <MenuItem title="Stats" path="/stats" />
      <MenuItem title="Blogs" path="/blogs" />
    </ul>
  );
}

function RightSide() {
  const themeState = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  function onModeToggle() {
    dispatch(toggleDarkMode());
  }
  return (
    <>
      {themeState?.isDark === true && (
        <motion.div whileTap={{ scale: 0.5 }} onClick={onModeToggle}>
          <MdDarkMode className="text-3xl cursor-pointer text-primary-darker dark:text-primary-lighter" />
        </motion.div>
      )}
      {themeState?.isDark === false && (
        <motion.div whileTap={{ scale: 0.5 }}    onClick={onModeToggle}>
          <BsSunFill
            className="text-3xl cursor-pointer text-primary-darker"
          />
        </motion.div>
      )}
    </>
  );
}

const Header: React.FC<Props> = () => {
  return (
    <header className="fixed flex justify-center   w-full items-center justify-between px-10 py-2 bg-primary-lighter dark:bg-primary-darker">
      <LeftSide></LeftSide>
      <MiddleSide></MiddleSide>
      <RightSide></RightSide>
    </header>
  );
};
export default Header;
