import React from "react";
import { useAppDispatch } from "../../hooks";
import { activeDarkMode ,deactiveDarkMode} from "../../store/slices/themeSlice";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <main className="max-w-4xl mx-auto ">
        {children}
        <Footer />
      </main>
    </>
  );
};
export default MainLayout;