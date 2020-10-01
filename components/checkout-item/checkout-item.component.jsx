import React from "react";
import { connect } from "react-redux";
import styles from "./checkout-item.module.scss";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../redux/cart/cart.actions";
const CheckoutItem = ({ cartItem, clearItemFromCart, addItemToCart, removeItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div
          className={styles.arrow}
          onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div
          className={styles.arrow}
          onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div
        className={styles.removeButton}
        onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) =>
    dispatch(clearItemFromCart(item)),
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});
export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
