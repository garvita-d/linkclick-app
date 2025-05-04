import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/government-services">Government Services</Link>
      <Link to="/health-wellness">Health & Wellness</Link>
      <Link to="/tutorials">Tutorials</Link>
      <Link to="/entertainment">Entertainment</Link>
    </nav>
  );
};

export default NavigationBar;
