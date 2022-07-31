import { motion } from "framer-motion";
import React from "react";
import { useAppDispatch } from "../../hooks";
import {
  activeDarkMode,
  deactiveDarkMode,
} from "../../store/slices/themeSlice";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { MyIcons } from "./components/Icons";
interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  const disaptch = useAppDispatch();
  function onStartup() {
    const isDark = !!localStorage.getItem("isDark");
    if (isDark === true) {
      disaptch(activeDarkMode());
    } else if (isDark === false) {
      disaptch(deactiveDarkMode());
    }
  }
  React.useEffect(onStartup, []);
  const handleToTop=()=>{
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }
  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <main className="max-w-4xl mx-auto relative">
        {children}
        <Footer />
        <ToTopBtn onClick={handleToTop} className="fixed w-10 h-10 cursor-pointer m-3 rounded-full text-primary-darker bg-primary-lighter dark:text-primary-lighter  dark:bg-primary-darker  right-0 bottom-0 " />
      </main>
    </>
  );
};
function ToTopBtn({ ...rest }) {
  return (
    <motion.div {...rest} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <MyIcons.upArrow className="text-xs w-10 h-10" ></MyIcons.upArrow>
    </motion.div>
  );
  return;
}
export default MainLayout;
