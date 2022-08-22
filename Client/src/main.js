/* eslint-disable */
import { createApp, Vue } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import message from './utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = createApp(App).use(store).use(router)
app.config.globalProperties.$date = dateFilter
app.config.globalProperties.$message = message 
app.mount('#app')

firebase.initializeApp({
  apiKey: "AIzaSyDAwM6nhJeoODSAeyNAK5W_vM009teCwyc",
  authDomain: "crm-system-by-ibrahim.firebaseapp.com",
  projectId: "crm-system-by-ibrahim",
  storageBucket: "crm-system-by-ibrahim.appspot.com",
  messagingSenderId: "439668009078",
  appId: "1:439668009078:web:61059795624d60c2165757",
  measurementId: "G-CWH3DYN379"
})

