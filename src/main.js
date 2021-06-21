import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
  
createApp(App).use(store).use(router).mount("#app");


const firebaseConfig = {
  apiKey: "AIzaSyDxNqFjPNT_TQgjbWMjQBHUG5U1fAA54q0",
  authDomain: "test-999e8.firebaseapp.com",
  projectId: "test-999e8",
  storageBucket: "test-999e8.appspot.com",
  messagingSenderId: "717843418485",
  appId: "1:717843418485:web:5edf6792959322a45dd73c",
  measurementId: "G-T689L4XJCW",
};

firebase.initializeApp(firebaseConfig);
