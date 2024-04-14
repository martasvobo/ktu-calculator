import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHMKdvge9IbE5Q1mocLk9u_t9ZOtDAet8",
  authDomain: "ktu-calculator.firebaseapp.com",
  projectId: "ktu-calculator",
  storageBucket: "ktu-calculator.appspot.com",
  messagingSenderId: "841434618819",
  appId: "1:841434618819:web:73564581e91da712b03b76",
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
