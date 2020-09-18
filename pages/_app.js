import "../styles/globals.css";
import "../styles/fonts.css";
import React from "react"
import Header from "../components/header/header.component";
import Footer from "../components/footer/footer.component";
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
