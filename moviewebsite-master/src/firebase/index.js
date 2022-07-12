import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCroOn8-MK5WITkAhzhoInOcygSHhGO2v8",
  authDomain: "movies-app-14148.firebaseapp.com",
  projectId: "movies-app-14148",
  storageBucket: "movies-app-14148.appspot.com",
  messagingSenderId: "64316451488",
  appId: "1:64316451488:web:d9693ecd0f7a38128b37c5",
  measurementId: "G-3433B4MHJN"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);