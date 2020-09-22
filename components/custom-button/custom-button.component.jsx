import React from "react";

import styles from "./custom-button.module.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={`${
      isGoogleSignIn ? styles.googleSignIn : ""
    } ${styles.customButton}`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
