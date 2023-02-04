import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDxzHPDWuXX8lQDgHBY3VScmc2zmFuuCyQ",
    authDomain: "enunciate-48cde.firebaseapp.com",
    projectId: "enunciate-48cde",
    storageBucket: "enunciate-48cde.appspot.com",
    messagingSenderId: "490550703572",
    appId: "1:490550703572:web:bea52a84e99aa65426d241"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);