import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDs36Xq1l3EGXWbn3KEwc7i0coMkore2Ac',
    authDomain: 'crown-clothing-340f7.firebaseapp.com',
    projectId: 'crown-clothing-340f7',
    storageBucket: 'crown-clothing-340f7.appspot.com',
    messagingSenderId: '1066539679837',
    appId: '1:1066539679837:web:be42c73b2097f17b340db4',
    measurementId: 'G-9GJS8YQ8B7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
