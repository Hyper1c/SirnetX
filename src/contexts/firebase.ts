
// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Aquí pon los datos de tu proyecto de Firebase
const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyAe1EXmLjdezfC_HJ00wxIUdeu3Y9KfQDU",
  authDomain: "test111-7c3a9.firebaseapp.com",
  projectId: "test111-7c3a9",
  storageBucket: "test111-7c3a9.firebasestorage.app",
  messagingSenderId: "675503940912",
  appId: "1:675503940912:web:e8c0f780db0b71eecd94f5",
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);

// Exporta servicios
export const db = getFirestore(app);
export const auth = getAuth(app);
