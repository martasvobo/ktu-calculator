import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import MatrixPage from "./MatrixPage";
import RegisterPage from "./RegisterPage";
import TopicsPage from "./TopicsPage";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export const UserContext = React.createContext(null);

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  });

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {user && <Route path="/topics" element={<TopicsPage />} />}
          {user && <Route path="/matrix" element={<MatrixPage />} />}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
