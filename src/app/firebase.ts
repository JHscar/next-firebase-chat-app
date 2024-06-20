// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDuaSfrMnozUBBF2B016IwZwq8b6gFTx_U",
	authDomain: "next-firebase-chat-app-c3c4c.firebaseapp.com",
	projectId: "next-firebase-chat-app-c3c4c",
	storageBucket: "next-firebase-chat-app-c3c4c.appspot.com",
	messagingSenderId: "694836633693",
	appId: "1:694836633693:web:7a0647306163f0bbebedb4",
	measurementId: "G-X3LFVCL5WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };