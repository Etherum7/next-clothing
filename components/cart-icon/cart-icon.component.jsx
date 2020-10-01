import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import styles from "./cart-icon.module.scss";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => (
  <div
    className={styles.cartIcon}
    onClick={toggleCartHidden}>
    <img
      src="/shopping-bag.svg"
      className={styles.shoppingIcon}
    />
    <span className={styles.itemCount}>
      {cartItemsCount}
    </span>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
