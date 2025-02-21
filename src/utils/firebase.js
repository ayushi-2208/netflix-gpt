// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-MR-XbVEivPcJhn5voAX9Y8CSqb3jbWQ",
  authDomain: "netflix-gpt-dd941.firebaseapp.com",
  projectId: "netflix-gpt-dd941",
  storageBucket: "netflix-gpt-dd941.firebasestorage.app",
  messagingSenderId: "9965445475",
  appId: "1:9965445475:web:8bcec102bcf00415a3f356",
  measurementId: "G-QBTYKEY2SN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();