import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyxTBx95IwF3PwrfkuCV4gl0vt-QOaXkY",
    authDomain: "portfolio-contact-form-96a67.firebaseapp.com",
    projectId: "portfolio-contact-form-96a67",
    storageBucket: "portfolio-contact-form-96a67.appspot.com",
    messagingSenderId: "851344556751",
    appId: "1:851344556751:web:47c40387a1a1d41a49adba"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };