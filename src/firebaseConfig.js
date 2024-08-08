// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlCjjC8nmIizqMmIOgoOFZ9wa_nWG2imM",
  authDomain: "student-management-syste-d3a25.firebaseapp.com",
  projectId: "student-management-syste-d3a25",
  storageBucket: "student-management-syste-d3a25.appspot.com",
  messagingSenderId: "1094394472787",
  appId: "1:1094394472787:web:58855a64a0a125f78199a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firestore

const db = getFirestore(app);

export {db}