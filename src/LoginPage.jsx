import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
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
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              window.open("/", "_self");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        }}
      >
        Log in
      </button>
      <button
        onClick={() => {
          sendPasswordResetEmail(auth, email)
            .then(() => {
              alert("Password reset email sent!");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        }}
      >
        Change Password
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}