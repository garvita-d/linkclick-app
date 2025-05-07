// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'; // ✅ Import Signup
import Home from './components/Home/Home';
import GovernmentServices from './components/GovernmentServices/GovernmentServices';
import Tutorials from './components/Tutorials/Tutorials';
import Reminders from './components/Reminders/Reminders';
import Services from './components/Services/Services';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* ✅ New Signup route */}
        <Route path="/home" element={<Home />} />
        <Route path="/government-services" element={<GovernmentServices />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;

