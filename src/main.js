import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'
import firebase from 'firebase/compat/app'
import 'firebase/database'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCyxTBx95IwF3PwrfkuCV4gl0vt-QOaXkY",
  authDomain: "portfolio-contact-form-96a67.firebaseapp.com",
  projectId: "portfolio-contact-form-96a67",
  storageBucket: "portfolio-contact-form-96a67.appspot.com",
  messagingSenderId: "851344556751",
  appId: "1:851344556751:web:47c40387a1a1d41a49adba"
}

firebase.initializeApp(firebaseConfig)

createApp(App)
    .use(router)
    .use(firebase)
    .mount('#app')
