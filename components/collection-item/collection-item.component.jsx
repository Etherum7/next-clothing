import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.actions";
import styles from "./collection-item.module.scss";
import customButtonStyles from "../custom-button/custom-button.module.scss";

import CustomButton from "../custom-button/custom-button.component";
function CollectionItem({ item, addToCart }) {
  const { id, name, price, imageUrl } = item;
  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className={styles.collectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <CustomButton
        className={`${customButtonStyles.customButton} ${styles.custombutton}`}
        inverted
        onClick={() => addToCart(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addItemToCart(item)),
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
