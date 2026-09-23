import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYkexhJbvfq3mguj-ytanksgSUo16Qas0",
  authDomain: "movie-mpp.firebaseapp.com",
  projectId: "movie-mpp",
  storageBucket: "movie-mpp.firebasestorage.app",
  messagingSenderId: "158506612053",
  appId: "1:158506612053:web:d9f0cbe5c30ac94871abdc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
