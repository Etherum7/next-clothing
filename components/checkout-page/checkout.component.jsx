import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selector';

import styles from './checkout.module.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className={styles.checkoutPage}>
    <div className={styles.checkoutHeader}>
      <div className={styles.headerblock}>
        <span>Product</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Description</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Quantity</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Price</span>
      </div>
      <div className={styles.headerBlock}>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className={styles.total}>TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);