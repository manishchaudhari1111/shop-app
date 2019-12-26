import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6Go1KLajinhh8U8EWC0U29KIXRQ8dEUA",
    authDomain: "shop-app-3ab4e.firebaseapp.com",
    databaseURL: "https://shop-app-3ab4e.firebaseio.com",
    projectId: "shop-app-3ab4e",
    storageBucket: "shop-app-3ab4e.appspot.com",
    messagingSenderId: "711127701500",
    appId: "1:711127701500:web:6b622909e741638cb9c479"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;