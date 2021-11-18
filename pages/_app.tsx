import "../styles/globals.css";
import "../styles/style.scss";
// import "../styles/App.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import "../styles/ck-editor-content.scss";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";
import "../styles/App.scss"
import Header from "../layouts/Header";
import theme from "../helpers/store/theme.js";
import { Footer } from "../layouts/Footer";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppContextContainer from "../contexts/appContext";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const script = document.createElement("script");
    // script.src = "https://cdn.globalpass.ch/stage/global-pass-screening-widget.latest.js";
    script.src =
      "https://cdn.globalpass.ch/live/global-pass-screening-widget.latest.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
    <Head>
    <link rel="icon" href="/logo.svg" />
    <link rel="apple-touch-icon" href="/logo.svg" />
    {/* <meta charset="utf-8" /> */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="EID Network helps "
    />
    <link rel="manifest" href="/manifest.json" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>EID Network</title>


    </Head>
      <div className="App">
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <AppContextContainer>
            <Header />

            <Component {...pageProps} />
            <Footer />
          </AppContextContainer>
        </ThemeProvider>
      </div>
    </>
  );
}
export default MyApp;
