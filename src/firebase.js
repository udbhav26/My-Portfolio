import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
//   authDomain: "portofolio-web-3e8e8.firebaseapp.com",
//   projectId: "portofolio-web-3e8e8",
//   storageBucket: "portofolio-web-3e8e8.appspot.com",
//   messagingSenderId: "25195509306",
//   appId: "1:25195509306:web:2b635dcf997137bf612703"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db, collection, addDoc };

// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYt_xiGK3DuaROi-DmIpAHAKPk5E_csNk",
  authDomain: "udbhav-s-portfolio.firebaseapp.com",
  projectId: "udbhav-s-portfolio",
  storageBucket: "udbhav-s-portfolio.firebasestorage.app",
  messagingSenderId: "1015837949880",
  appId: "1:1015837949880:web:ad3449ffcb6897d5e7594d",
  measurementId: "G-57JX60HVRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc };