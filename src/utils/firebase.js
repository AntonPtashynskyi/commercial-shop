import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_MSG_SENDER_ID,
  VITE_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: "comercial-shop.firebaseapp.com",
  projectId: "comercial-shop",
  storageBucket: "comercial-shop.appspot.com",
  messagingSenderId: VITE_FIREBASE_MSG_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
