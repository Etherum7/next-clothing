import React from "react";

import { useRouter } from "next/router";

import { connect } from "react-redux";
import { selectCurrentUser } from "../redux/user/user.selector";

import SignInAndSignUpPage from "../components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { createStructuredSelector } from "reselect";
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
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps)(AuthenticationPage);
