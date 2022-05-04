import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeRp4GQh8SkhiZvJmGnLjmoN9uMwD_AR8",
  authDomain: "covid-19-data-6072d.firebaseapp.com",
  projectId: "covid-19-data-6072d",
  storageBucket: "covid-19-data-6072d.appspot.com",
  appId: "1:502854240583:android:ff6ce63a6ae0c4428fe462",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);