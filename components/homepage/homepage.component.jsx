import React from "react";
import Head from "next/head";
import styles from "./homepage.module.scss";

import Directory from "../../components/directory/directory.component";
const HomePage = () => (
  <div className={styles.homepage}>
    <Head>
      <title>Next Clothing</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Directory />
  </div>
);

export default HomePage;
