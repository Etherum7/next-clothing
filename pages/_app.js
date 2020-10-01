import React, { useState, useEffect } from "react";

import { useStore } from "react-redux";
import wrapper from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";

import "../styles/globals.css";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <React.Fragment>
      <PersistGate
        persistor={store.__persistor}
        loading={<div>loading</div>}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </React.Fragment>
  );
}

export default wrapper.withRedux(MyApp);
