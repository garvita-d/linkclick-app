import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinkClickLandingPage from "./LinkClickLandingPage";

function Placeholder({ title }) {
  return <div className="p-10 text-xl font-bold">{title} Page Coming Soon...</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinkClickLandingPage />} />
        <Route path="/government-services" element={<Placeholder title="Government Services" />} />
        <Route path="/tutorials" element={<Placeholder title="Tutorials" />} />
        <Route path="/reminders" element={<Placeholder title="Reminders" />} />
        <Route path="/easy-online-services" element={<Placeholder title="Easy Online Services" />} />
      </Routes>
    </Router>
  );
}

export default App;
