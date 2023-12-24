import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login/Login';
import MainPage from './Component/Main/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
