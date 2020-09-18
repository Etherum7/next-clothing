import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import styles from "./sign-in.module.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");
  }

  return (
    <div className={styles.signIn}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={(event) =>
            setEmail(event.target.value)
          }
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={email}
          handleChange={(event) =>
            setPassword(event.target.value)
          }
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
