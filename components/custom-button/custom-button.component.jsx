import React from "react";

import styles from "./custom-button.module.scss";

const CustomButton = ({ children, ...otherProps }) => (
  <button className={styles.customButton} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
