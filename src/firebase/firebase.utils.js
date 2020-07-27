import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBSHPlWqTSey5dMjdXUw2PmJFvL6ewkG2E",
        authDomain: "metra-2112d.firebaseapp.com",
        databaseURL: "https://metra-2112d.firebaseio.com",
        projectId: "metra-2112d",
        storageBucket: "metra-2112d.appspot.com",
        messagingSenderId: "821984085698",
        appId: "1:821984085698:web:80d982311170d843e3dd5b",
        measurementId: "G-FMEBC57QSQ"
      
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();


    if(!snapShot.exists) {
        const {displayName, email,uid} = userAuth;
        const createAt = new Date();
        try {
          await userRef.set({
              displayName,
              email,
              createAt,
              uid,
              ...additionalData
          })
        } catch (error) {
         console.log('error creating user', error.message);
        }
    }
    
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
   return await batch.commit();
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const storage = firebase.app().storage("gs://metra-2112d.appspot.com");

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

