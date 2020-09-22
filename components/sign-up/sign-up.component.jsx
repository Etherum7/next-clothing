import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import styles from "./sign-up.module.scss";

function SignUp() {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {
    displayName,
    email,
    password,
    confirmPassword,
  } = credentials;
 const handleSubmit = async (event) => {
    event.preventDefault();
    

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const {
        user,
      } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName,
      });

      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className={styles.signUp}>
      <h2 className={styles.title}>
        I do not have a account
      </h2>
      <span>Sign up with your email and password</span>
      <form
        className={styles.signUpForm}
        onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={(event) =>
            setCredentials({
             ...credentials,
              displayName: event.target.value,
            })
          }
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(event) =>
            setCredentials({
             ...credentials,
              email: event.target.value,
            })}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(event) =>
            setCredentials({
             ...credentials,
              password: event.target.value,
            })}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(event) =>
            setCredentials({
             ...credentials,
              confirmPassword: event.target.value,
            })}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
