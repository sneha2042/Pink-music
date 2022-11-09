import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

/*const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};*/

const firebaseConfig = {
  apiKey: "AIzaSyBawsmb-uaeCogwy9LoCg48_2X6_P5KUL0",
  authDomain: "pinkmusic-c0c04.firebaseapp.com",
  projectId: "pinkmusic-c0c04",
  storageBucket: "pinkmusic-c0c04.appspot.com",
  messagingSenderId: "233767553594",
  appId: "1:233767553594:web:595ab34d7f7cf778f78303",
  measurementId: "G-408E0NYJND"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
