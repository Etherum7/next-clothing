import React from "react";

import styles from "./custom-button.module.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${
      isGoogleSignIn ? styles.googleSignIn : ""
    } ${inverted ? styles.inverted : ""} ${
      styles.customButton
    }`}
    {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
