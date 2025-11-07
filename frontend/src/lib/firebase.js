import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_73xvcpmbPbiHlKd0yZOgIqHQ3yGqGBc",
  authDomain: "foundation360-2c3e6.firebaseapp.com",
  projectId: "foundation360-2c3e6",
  storageBucket: "foundation360-2c3e6.appspot.com",
  messagingSenderId: "215984458087",
  appId: "1:215984458087:web:95c641f5e3ec18b3747062",
  measurementId: "G-97VRX670V6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
