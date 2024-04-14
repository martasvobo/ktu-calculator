import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

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
          const auth = getAuth();
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
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
