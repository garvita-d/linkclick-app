// src/components/Reminders/Reminders.js
import React, { useState } from 'react';
import './Reminders.css'; // Ensure this CSS file exists for styling

const Reminders = () => {
  const [notifications, setNotifications] = useState({
    medicine: true,
    drinkWater: true,
    pensionStatus: false,
    bankVisit: false,
    billPayments: true,
    eyeCheckUp: false,
    bookingConfirmation: true,
  });

  const handleToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="app">
      <h1>Reminders & Notifications</h1>

      <div className="section">
        <h2>Reminders</h2>
        <ul>
          <li>Medicine <span className="info-icon">i</span></li>
          <li>Doctor appointment <span className="info-icon">i</span></li>
          <li>Bedtime <span className="info-icon">i</span></li>
          <li>Exercise <span className="info-icon">i</span></li>
          <li>Medication <span className="info-icon">i</span></li>
          <li>Meals <span className="info-icon">i</span></li>
          <li>Drink water <span className="info-icon">i</span></li>
          <li>Monthly payments <span className="info-icon">i</span></li>
        </ul>
      </div>

      <div className="section">
        <h2>Notifications</h2>
        <ul>
          {Object.entries(notifications).map(([key, value]) => (
            <li key={key}>
              {key.replace(/([A-Z])/g, ' $1')} 
              <label className="switch">
                <input type="checkbox" checked={value} onChange={() => handleToggle(key)} />
                <span className="slider round"></span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reminders;
