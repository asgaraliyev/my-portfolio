import { Container } from "@chakra-ui/react";
import React, { ReactChildren, ReactChild } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
interface AuxProps {
  children: ReactChild | ReactChildren;
}

const Main = ({ children }: AuxProps) => {
  return (
    <>
      <Header />

      <main> {children}</main>

      <Footer />
    </>
  );
};
export default Main;
