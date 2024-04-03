
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgKcVorVwZMSL5jU_kr3jXfFQAd-ACJdg",
  authDomain: "fashioncart-1b663.firebaseapp.com",
  projectId: "fashioncart-1b663",
  storageBucket: "fashioncart-1b663.appspot.com",
  messagingSenderId: "669200281410",
  appId: "1:669200281410:web:34c1b1105718de3373a2db",
  measurementId: "G-NTSD2ZJMXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const auth = getAuth();

export{app,auth,db};
