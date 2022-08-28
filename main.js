import { createApp } from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './router'
// import firebase from 'firebase/compat/app'
// import 'firebase/database'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'

// const firebaseConfig = {

// }

// firebase.initializeApp(firebaseConfig)

createApp(App)
    .use(router)
    // .use(firebase)
    .mount('#app')
