import React from 'react';

import SignIn from '../sign-in/sign-in.component';

import styles from './sign-in-and-sign-up.module.scss';

const SignInAndSignUpPage = () => (
  <div className={styles.signInAndSignUp}>
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;