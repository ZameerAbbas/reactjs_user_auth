import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login/Login";
import MainPage from "./Component/Main/Main";
import SignUp from "./Auth/SignUp/SignUp";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<MainPage />}>
          <Route path="/Main/Home" element={<Home />}></Route>
          <Route path="/Main/About" element={<About />}></Route>
        </Route>
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
