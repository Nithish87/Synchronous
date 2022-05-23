import { initializeApp } from "firebase/app";
import { getDatabase, get, child } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAlmdLR_bdjp0Leetpi53dc7wbxQqHZTqE",
  authDomain: "godsend-website-c62e0.firebaseapp.com",
  projectId: "godsend-website-c62e0",
  storageBucket: "godsend-website-c62e0.appspot.com",
  messagingSenderId: "299022445549",
  appId: "1:299022445549:web:e9f435dae04b9eb3a255e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const auth = getAuth(app);
