import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// firebase
import { initializeApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// plugins
import Toaster from '@meforma/vue-toaster'
import { vfmPlugin } from 'vue-final-modal'

// css
import './index.css'

const firebaseConfig = {
  apiKey: 'AIzaSyD-skhTfaFaFu3L4zUc1DvO9LclMJF3Gz4',
  authDomain: 'tutorly-b831e.firebaseapp.com',
  projectId: 'tutorly-b831e',
  storageBucket: 'tutorly-b831e.appspot.com',
  messagingSenderId: '964016781459',
  appId: '1:964016781459:web:45d36e3bceed8f4b12b566'
}

const firebase = initializeApp(firebaseConfig)
const firestoreSettings = {
  timestampsInSnapshots: true
}

getStorage(firebase)
initializeFirestore(firebase, firestoreSettings)

const app = createApp(App)
app.use(vfmPlugin)
app.use(Toaster).provide('toast', app.config.globalProperties.$toast)
app.use(createPinia())
app.use(router)
app.mount('#app')
