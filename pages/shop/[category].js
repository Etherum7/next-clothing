import React from "react";
import { useRouter } from "next/router";

import Collection from "../../components/collection/collection.component";

function ShopCategory() {
  const router = useRouter();
  const { category } = router.query;
  return (
    <div>
      <Collection category={category} />
    </div>
  );
}

export default ShopCategory;
