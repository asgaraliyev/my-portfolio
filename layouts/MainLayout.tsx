import React from "react";
import Footer from "../components/layouts/main/Footer";
import Header from "../components/layouts/main/Header";
import { useAppDispatch } from "../hooks";
import { activeDarkMode, deactiveDarkMode } from "../store/slices/themeSlice";
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
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
