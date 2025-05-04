import React, { useState, useEffect } from "react";

const Notifications = () => {
  const [message, setMessage] = useState("Welcome to LinkClik!");

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage("Don't forget to check your medicine reminders!");
    }, 10000); // Changes notification every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-bar">
      <p>{message}</p>
    </div>
  );
};

export default Notifications;
