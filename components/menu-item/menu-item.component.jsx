import React from "react";

import { useRouter } from "next/router";

import styles from "./menu-item.module.scss";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  const router = useRouter();
  return (
    <div
      className={styles.menuItem}
      style={{ height: size ? "380px" : "240px" }}
      onClick={() => router.push(`/${linkUrl}`)}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>
          {title.toUpperCase()}
        </h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
