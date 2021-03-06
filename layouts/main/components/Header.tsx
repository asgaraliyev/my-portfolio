import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { motion, useCycle } from "framer-motion";
import {
  selectTheme,
  ThemeState,
  toggleDarkMode,
  toggleMobileMenu,
} from "../../../store/slices/themeSlice";
import { useRouter } from "next/router";
import {  MyIcons } from "./Icons";
interface Props {}
const navigation_animation_variants = {
  open: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    x: -3000,
    rotate: 90,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const menu_icon_variants = {
  open: {
    rotate: 90,
  },
  closed: {
    rotate: 0,
  },
};
const MobileMenuItem_variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 300,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

function MobileMenuItem({ title, onClick }: MobileMenuItemProps) {
  return (
    <motion.li
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      variants={MobileMenuItem_variants}
      className="mobile-menu-li flex flex-col sm:flex-row border-b-2  my-5 dark:border-primary-darker-border border-primary-lighter-border"
    >
      <p
        onClick={onClick}
        className="block sm:hidden  text-primary-lighter text-2xl dark:text-primary-darker cursor-pointer py-2"
      >
        {title}
      </p>
    </motion.li>
  );
}
function LeftSide({ themeState }: { themeState: ThemeState }) {
  const [menuStatus, toggleMenuStatus] = useCycle("closed", "open");
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <div>
      <Link href="/home">
        <h1 className="hidden sm:block dark:text-primary-lighter text-bold cursor-pointer text-primary-darker text-lg ">
          Asgar Aliyev
        </h1>
      </Link>
      <motion.div initial={false} animate={menuStatus}>
        <motion.ul
          initial={false}
          transition={{ duration: 10 }}
          variants={navigation_animation_variants}
          className="fixed left-0 w-screen   h-screen  top-0 p-5 bg-gradient-to-t from-primary-light dark:to-primary-lighter to-primary-darker"
        >
          <br></br>
          <br></br>
          {themeState.menu.map((item) => {
            return (
              <MobileMenuItem
                key={item.path}
                title={item.title}
                onClick={() => {
                  dispatch(toggleMobileMenu());
                  router.push(item.path);
                }}
              />
            );
          })}
          <div className="w-full flex justify-center bottom-2 fixed">
            {themeState.social.map((item) => {
              const Icon = MyIcons[item.icon_name];
              return (
                <Icon
                  key={item.path}
                  onClick={() => {
                    router.push(item.path);
                  }}
                  className="cursor-pointer text-xl mx-2 dark:text-primary-darker text-primary-lighter"
                />
              );
            })}
          </div>
        </motion.ul>
        <motion.div variants={menu_icon_variants}>
          <MyIcons.menu
            className={`block sm:hidden  dark:text-primary  text-primary text-3xl  cursor-pointer`}
            onClick={() => {
              dispatch(toggleMobileMenu());
              toggleMenuStatus();
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
interface MobileMenuItemProps {
  title: string;
  onClick: () => void;
}
interface MenuItemProps {
  title: string;
  path: string;
}

function MenuItem({ title, path }: MenuItemProps) {
  return (
    <motion.li
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className=" hidden font-bold text-primary-darker dark:text-primary-lighter mx-1 sm:mx-3 md:mx-5 lg:mx-10 sm:block"
    >
      <Link href={path}>{title}</Link>
    </motion.li>
  );
}

function MiddleSide({ themeState }: { themeState: ThemeState }) {
  return (
    <motion.ul className="flex justify-center justify-between items-center ">
      {themeState.menu.map((item) => {
        return <MenuItem key={item.path} title={item.title} path={item.path} />;
      })}
    </motion.ul>
  );
}

function RightSide({ themeState }: { themeState: ThemeState }) {
  const dispatch = useAppDispatch();
  function onModeToggle() {
    dispatch(toggleDarkMode());
  }
  return (
    <motion.div whileTap={{ scale: 0.5 }} onClick={onModeToggle}>
      {themeState?.isDark === true && (
        <MyIcons.moon className="text-3xl cursor-pointer text-primary  relative z-10" />
      )}
      {themeState?.isDark === false && (
        <MyIcons.sun className="text-3xl cursor-pointer text-primary relative z-10" />
      )}
    </motion.div>
  );
}

const Header: React.FC<Props> = () => {
  const themeState = useAppSelector(selectTheme);

  return (
    <header className="fixed flex justify-between   w-full items-center  px-1 sm:px-3 py-6 bg-primary-lighter dark:bg-primary-darker z-10">
      <LeftSide themeState={themeState}></LeftSide>
      <MiddleSide themeState={themeState}></MiddleSide>
      <RightSide themeState={themeState}></RightSide>
    </header>
  );
};
export default Header;
