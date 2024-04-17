import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import "./Register.css";
import { auth } from "./firebase";

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
