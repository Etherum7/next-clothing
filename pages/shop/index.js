import React, { useEffect } from "react";

import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

function Shop({ updateCollections, collectionsMap }) {
  useEffect(() => {
    updateCollections(collectionsMap);
  }, [collectionsMap]);
  return (
    <React.Fragment>
      <CollectionOverview />
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export async function getStaticProps(context) {
  const collectionRef = firestore.collection("collections");
  var collectionsMap = await collectionRef
    .get()
    .then(async (querySnapshot) => {
      return await convertCollectionsSnapshotToMap(
        querySnapshot
      );
    });
console.log(collectionsMap)
  return {
    props: { collectionsMap },

    // will be passed to the page component as props
  };
}
export default connect(null, mapDispatchToProps)(Shop);
