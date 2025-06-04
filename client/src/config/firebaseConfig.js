import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6ru7DZLMLGkEnokXcJ7MDfUoGGhZOgGM",
    authDomain: "restaurant-menu-38887.firebaseapp.com",
    projectId: "restaurant-menu-38887",
    storageBucket: "restaurant-menu-38887.firebasestorage.app",
    messagingSenderId: "522091979690",
    appId: "1:522091979690:web:79acfe76a727cd5aa2c1d3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);