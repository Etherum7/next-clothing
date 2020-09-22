import React from "react";

import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

import styles from "./sign-in-and-sign-up.module.scss";

const SignInAndSignUpPage = () => (
  <div className={styles.signInAndSignUp}>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
