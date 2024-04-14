import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import TopicsPage from "./TopicsPage";
import Calculator from "./Calculator";
import MatrixPage from "./MatrixPage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import LoginPage from "./LoginPage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHMKdvge9IbE5Q1mocLk9u_t9ZOtDAet8",
  authDomain: "ktu-calculator.firebaseapp.com",
  projectId: "ktu-calculator",
  storageBucket: "ktu-calculator.appspot.com",
  messagingSenderId: "841434618819",
  appId: "1:841434618819:web:73564581e91da712b03b76",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Firebase

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/matrix" element={<MatrixPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
