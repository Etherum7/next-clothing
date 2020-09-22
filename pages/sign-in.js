import React from "react";

import { useRouter } from "next/router";
import { connect } from "react-redux";

import SignInAndSignUpPage from "../components/sign-in-and-sign-up/sign-in-and-sign-up.component";
function AuthenticationPage({ currentUser }) {
  const router = useRouter();
  if (currentUser) {
    router.push("/");
  }
  return (
    <div>
      <SignInAndSignUpPage />
    </div>
  );
}
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(AuthenticationPage);
