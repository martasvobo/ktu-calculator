import { useState } from 'react'
import './App.css'
import Calculator from './Calculator';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHMKdvge9IbE5Q1mocLk9u_t9ZOtDAet8",
  authDomain: "ktu-calculator.firebaseapp.com",
  projectId: "ktu-calculator",
  storageBucket: "ktu-calculator.appspot.com",
  messagingSenderId: "841434618819",
  appId: "1:841434618819:web:73564581e91da712b03b76"
};

// Initialize Firebase

function App() {
  return (
      <div className="App">
          <Calculator /> {/* Render with uppercase */}
      </div>
  );
}

export default App
