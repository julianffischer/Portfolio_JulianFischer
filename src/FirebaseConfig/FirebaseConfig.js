import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpyBcVECh2DImTuMTcljleUAsgfZzxkW4",
    authDomain: "apple-proyect.firebaseapp.com",
    projectId: "apple-proyect",
    storageBucket: "apple-proyect.appspot.com",
    messagingSenderId: "132004561265",
    appId: "1:132004561265:web:82fa00a48222cf98bb76d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)