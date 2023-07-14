import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "your apiKey",
  authDomain: "your authDomain",
  projectId: "your projectId",
  storageBucket: "your storageBucket",
  messagingSenderId: "your messagingSenderId",
  appId: "your appId",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const firebaseApp = getApp();
export const storage = getStorage(firebaseApp, "gs:your-link");
