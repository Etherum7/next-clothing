import React, { useRef, useEffect } from "react";
import styles from "./header.module.scss";
import Link from "next/link";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectToggleHidden } from "../../redux/cart/cart.selector";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logoContainer}>
          <img src="/crown.svg" className={styles.logo} />
        </a>
      </Link>

      <div className={styles.options}>
        <Link href="/shop">
          <a className={styles.option}>SHOP</a>
        </Link>
        <Link href="/shop">
          <a className={styles.option}>CONTACT</a>
        </Link>
        {currentUser ? (
          <div
            className={styles.option}
            onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={styles.option} href="/sign-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectToggleHidden,
});

export default connect(mapStateToProps)(Header);
