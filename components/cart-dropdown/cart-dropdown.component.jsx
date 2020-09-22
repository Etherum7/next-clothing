import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import styles from './cart-dropdown.module.scss';

const CartDropdown = () => (
  <div className={styles.cartDropdown}>
    <div className={styles.cartItems} />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;