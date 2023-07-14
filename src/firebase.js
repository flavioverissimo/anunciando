import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjIjEYUao5zhXoljzmzE0tDzXxjPUAU44",
  authDomain: "anunciaki-web.firebaseapp.com",
  projectId: "anunciaki-web",
  storageBucket: "anunciaki-web.appspot.com",
  messagingSenderId: "337058174099",
  appId: "1:337058174099:web:24748010036c7fedabe966",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

const firebaseApp = getApp();
export const storage = getStorage(
  firebaseApp,
  "gs://anunciaki-web.appspot.com"
);
