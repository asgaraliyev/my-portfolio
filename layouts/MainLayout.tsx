import React from "react";
import Footer from "../components/layouts/main/Footer";
import Header from "../components/layouts/main/Header";
interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
