import React from "react";
import { Helmet } from "react-helmet";
import "../../App.css";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LinkClick - Home</title>
      </Helmet>
      <section className="why-linkclick">
        <h2>Why LinkClick?</h2>
        <div className="arrow-container">
          <img src="path-to-down-arrow-icon.png" alt="down-arrow" className="down-arrow" />
        </div>
        <div className="video-container">
          <video width="100%" height="auto" controls>
            <source src="/videos/your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <img src="blob:https://web.whatsapp.com/97a9a8f5-6877-4019-b6a0-7723c94170cd" alt="tutorial" />
          <h3>Tutorials</h3>
          <p>You've never made a website this fast before.</p>
          <button>Read More</button>
        </div>

        <div className="feature">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTti7v_vXcKPIykyOz7C-49pneI2IIcFTWO6vYNEs1g7txOKBWTIw6Fsp2_E7p98q2A1s&usqp=CAU" alt="services" />
          <h3>Services</h3>
          <p>Image</p>
        </div>

        <div className="feature">
          <img src="https://static.vecteezy.com/system/resources/previews/021/254/827/non_2x/reminder-3d-render-mobile-phone-in-hand-with-notification-bell-button-and-floating-elements-on-purple-png.png" alt="notifications" />
          <h3>Notifications & Reminders</h3>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          LinkClick is a simple, senior-friendly digital support platform designed to simplify and centralize access to online services. It includes pictorial step-by-step tutorials on using WhatsApp, cable booking, Netflix, mobile recharge, and more.
        </p>
      </section>

      <section className="faq">
        <h2>FAQ</h2>
        <div className="faq-item">
          <button>What is LinkClick?</button>
          <p>LinkClick is a digital support platform...</p>
        </div>
        <div className="faq-item">
          <button>Who can use LinkClick?</button>
          <p>Anyone who needs assistance...</p>
        </div>
        <div className="faq-item">
          <button>What kind of tutorials are available on LinkClick?</button>
          <p>We have tutorials for WhatsApp, Netflix...</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
