import React, { useState } from "react";
import Head from "next/head";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../collection-preview/collection-preview.component";

function ShopPage() {
  const [collections] = useState(SHOP_DATA);

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

export default ShopPage;
