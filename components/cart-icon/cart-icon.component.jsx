import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import styles from './cart-icon.module.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div className={styles.cartIcon} onClick={toggleCartHidden}>
    <img src='/shopping-bag.svg' className={styles.shoppingIcon} />
    <span className={styles.itemCount}>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);