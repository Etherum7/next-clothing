import React from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { createStructuredSelector } from "reselect";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import styles from "./cart-dropdown.module.scss";

const CartDropdown = ({ cartItems, dispatch }) => {
  const router = useRouter();
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={styles.emptyMessage}>
            Your cart is empty
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          router.push("/checkout");
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
