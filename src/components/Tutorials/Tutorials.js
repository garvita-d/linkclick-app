import React from 'react';
import './Tutorials.css'; // Make sure this CSS file exists

const tutorials = [
  { title: "Food ordering through Swiggy and Zomato", imgSrc: "https://images.deepai.org/art-image/ca76c59366c24d1e8d58c5263c5d26f5/food-ordering-from-swiggy-zomato-a-smartphone-a-perss.jpg" },
  { title: "Booking cab through OLA and Uber", imgSrc: "https://images.deepai.org/art-image/24eed09839f343c6957ffed058b6e4d7/a-person-booking-a-cab-online-using-a-smartphone-the-.jpg" },
  { title: "Netflix subscription", imgSrc: "https://images.deepai.org/art-image/31efc7db1b904839b59b6d5aa616a224/a-person-using-a-smartphone-or-smart-tv-to-subscribe-.jpg" },
  { title: "Urban company for home works", imgSrc: "https://images.deepai.org/art-image/7688929bf4f94da4baf5e07b8b03331d/a-person-booking-a-home-repair-service-using-the-urba.jpg" },
  { title: "Facebook tutorial", imgSrc: "https://images.deepai.org/art-image/ca91a6737c2e4aa0a8083b1fbbb02346/a-person-scrolling-through-facebook-on-a-smartphone-w.jpg" },
  { title: "WhatsApp tutorial", imgSrc: "https://images.deepai.org/art-image/61b288bf57e641dda9a08bc4519efc89/a-person-chatting-on-whatsapp-using-a-smartphone-the-.jpg" },
  { title: "Amazon for shopping", imgSrc: "https://images.deepai.org/art-image/63dedb7a5b5040dd978e05673286045e/a-person-shopping-online-using-the-amazon-app-on-a-sm.jpg" },
  { title: "UPI", imgSrc: "https://images.deepai.org/art-image/0d249b4d021446f591c4933521a733ec/a-person-making-a-upi-payment-using-google-pay-on-a-s.jpg" },
  { title: "Instagram tutorial", imgSrc: "https://images.deepai.org/art-image/cbe58089d0294fe497f0ef1dc9a6f5ed/a-person-holding-a-smartphone-with-the-instagram-feed.jpg" },
  { title: "Amazon prime video", imgSrc: "https://images.deepai.org/art-image/c9466cca4dec4ea08591c60fa9a7af35/amazon-prime-a-person-using-this-app-in-phone-for-wat.jpg" },
  { title: "Big Basket for fresh food items", imgSrc: "https://images.deepai.org/art-image/829a948d068d41fc9c15172975c04762/a-person-holding-a-smartphone-with-the-bigbasket-fres.jpg" },
];

const Tutorials = () => {
  return (
    <div className="tutorials-container">
      <h2>Tutorials</h2>
      <div className="tutorials-grid">
        {tutorials.map((tutorial, index) => (
          <div className="tutorial-card" key={index}>
            <img src={tutorial.imgSrc} alt={tutorial.title} />
            <p>{tutorial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
