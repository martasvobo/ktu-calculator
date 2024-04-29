import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import "./Register.css";
import { auth } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="register-container">
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // create user object inside collection users
              const db = getFirestore();
              const user = {
                email: userCredential.user.email,
                calculationHistory: [],
              };
              //set documents id to be the same as user's id
              return setDoc(doc(db, "users", userCredential.user.uid), user);
            })
            .then(() => {
              window.open("/", "_self");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        }}
      >
        Register
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
