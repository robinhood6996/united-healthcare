import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;