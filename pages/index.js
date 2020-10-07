import React, { useEffect } from "react";

import HomePage from "../components/homepage/homepage.component";

import styles from "../styles/Home.module.css";

import { connect } from "react-redux";
import { setCurrentUser } from "../redux/user/user.actions";

import {
  auth,
  createUserProfileDocument,
} from "../firebase/firebase.utils";

function Home({ setCurrentUser, collectionsArray }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(
            userAuth
          );

          userRef.onSnapshot((snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
         
        } else {
          setCurrentUser(userAuth);
        }
      }
    );
  }, [setCurrentUser, collectionsArray]);
  return (
    <div>
      <HomePage />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(Home);
