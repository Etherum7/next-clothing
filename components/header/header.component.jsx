import React from "react";
import Link from "next/link";

import styles from "./header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <Link href="/">
      <a className={styles.logoContainer}>
        <img src="/crown.svg" className={styles.logo} />
      </a>
    </Link>

    <div className={styles.options}>
      <Link href="/shop">
        <a className={styles.option}>SHOP</a>
      </Link>
      <Link href="/shop">
        <a className={styles.option}>CONTACT</a>
      </Link>
    </div>
  </div>
);

export default Header;
