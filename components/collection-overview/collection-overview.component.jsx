import React, { useState } from "react";

import Head from "next/head";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

function CollectionOverview({ collections }) {
  return (
    <div>
      <Head>
        <title>Shop Next Clothing</title>
        <meta
          name="description"
          content="Best shop for exotic items in india"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {collections.map(
        ({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          />
        )
      )}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
