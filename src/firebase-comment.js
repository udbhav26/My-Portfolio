import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYt_xiGK3DuaROi-DmIpAHAKPk5E_csNk",
  authDomain: "udbhav-s-portfolio.firebaseapp.com",
  projectId: "udbhav-s-portfolio",
  storageBucket: "udbhav-s-portfolio.firebasestorage.app",
  messagingSenderId: "1015837949880",
  appId: "1:1015837949880:web:ad3449ffcb6897d5e7594d",
  measurementId: "G-57JX60HVRT"
};


// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };