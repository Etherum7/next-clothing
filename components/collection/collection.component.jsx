import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import CollectionItem from "../collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selector";

import styles from "./collection.module.scss";

const CollectionPage = ({ collection}) => {
  //Todo
  if (!collection) {
    return <p></p>;
  }
  const { title, items } = collection;
  return (
    <div>
      <div className={styles.collectionPage}>
        <Head />
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.items}>
          {items.map((item) => (
            <CollectionItem
              style={{ marginBottom: "30px" }}
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.category)(state),
});

export default connect(mapStateToProps)(CollectionPage);
