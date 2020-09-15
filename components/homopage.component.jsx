import React from "react";

import styles from "./homepage.module.scss";

const HomePage = () => (
  <div className="homepage">
    <div className={styles.directoryMenu}>
      <div className={styles.menuItem}>
        <div className={styles.content}>
          <div className={styles.title}>HATS</div>
          <span className={styles.subtitle}>SHOP NOW</span>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.content}>
          <div className={styles.title}>JACKETS</div>
          <span className={styles.subtitle}>SHOP NOW</span>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.content}>
          <div className={styles.title}>SHOES</div>
          <span className={styles.subtitle}>SHOP NOW</span>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.content}>
          <div className={styles.title}>WOMENS</div>
          <span className={styles.subtitle}>SHOP NOW</span>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.content}>
          <div className={styles.title}>MENS</div>
          <span className={styles.subtitle}>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
