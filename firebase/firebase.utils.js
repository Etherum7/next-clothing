import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBT7_CpoXL-Cxan0mdfvU9H0jaPES4HXec",
  authDomain: "next-clothing-b6fce.firebaseapp.com",
  databaseURL: "https://next-clothing-b6fce.firebaseio.com",
  projectId: "next-clothing-b6fce",
  storageBucket: "next-clothing-b6fce.appspot.com",
  messagingSenderId: "468642105017",
  appId: "1:468642105017:web:43b53e5b14d0511a27bd68",
  measurementId: "G-CSPNXPFVQW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (
  collections
) => {
  const transformedCollection = collections.docs.map(
    (doc) => {
      const { title, items } = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      };
    }
  );

  return transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[
        collection.title.toLowerCase()
      ] = collection;
      return accumulator;
    },
    {}
  );
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider);

export default firebase;
