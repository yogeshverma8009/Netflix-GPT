// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxmrqDMAycFvYvUccB9tUzXCYPhXehpFQ",
  authDomain: "netflixgptplus.firebaseapp.com",
  projectId: "netflixgptplus",
  storageBucket: "netflixgptplus.appspot.com",
  messagingSenderId: "30142791503",
  appId: "1:30142791503:web:f053204f66e8240f234f3a",
  measurementId: "G-17PLGGX585"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);