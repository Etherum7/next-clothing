import React, { useState, useEffect } from "react";
import wrapper from "../redux/store";

import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

import "../styles/globals.css";
import "../styles/fonts.css";



function MyApp({ Component, pageProps }) {

  
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default wrapper.withRedux(MyApp);
