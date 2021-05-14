import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBE_M-a8-1ZFBSSDCvvYATCgfQh32aRIXI",
    authDomain: "facebook-messenger-clone-db91d.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-db91d-default-rtdb.firebaseio.com",
    projectId: "facebook-messenger-clone-db91d",
    storageBucket: "facebook-messenger-clone-db91d.appspot.com",
    messagingSenderId: "378302458991",
    appId: "1:378302458991:web:9189fde185108bd986319a",
    measurementId: "G-9M3CCFRSNV"

});

const db = firebaseApp.firestore();

export default db;
