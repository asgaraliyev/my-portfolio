import React from "react";
import "../styles/globals.scss";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import store from "../store";
import { Provider } from "react-redux";
import MainLayout from "../layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
