import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBFLmM6uJhwdMq9LQgsC2ZZBOLV6yLfGYw",
    authDomain: "brainweb-d40f2.firebaseapp.com",
    projectId: "brainweb-d40f2",
    storageBucket: "brainweb-d40f2.appspot.com",
    messagingSenderId: "547767204969",
    appId: "1:547767204969:web:de7318d2fd1db16e7636f8",
    measurementId: "G-NL0H5J38SL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);