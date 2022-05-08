import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQomkCFsZkS3G5huvUa-XhRhDONkHiSZ4",
  authDomain: "godsend-website.firebaseapp.com",
  projectId: "godsend-website",
  storageBucket: "godsend-website.appspot.com",
  messagingSenderId: "563699958313",
  appId: "1:563699958313:web:654c5c304afa844bb29238",
  measurementId: "G-9GWVNL2P5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
