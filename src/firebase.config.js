import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrMsANdcT4JXiQiQx3xJ0HVhzL-HEMctc",
  authDomain: "stock-managment-b60ae.firebaseapp.com",
  projectId: "stock-managment-b60ae",
  storageBucket: "stock-managment-b60ae.appspot.com",
  messagingSenderId: "854839112950",
  appId: "1:854839112950:web:da10c65bd72ad67f65e8d7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
