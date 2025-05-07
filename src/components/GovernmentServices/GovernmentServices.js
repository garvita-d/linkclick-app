import React from 'react';
import '../../App.css'; // Or use GovernmentServices.css if preferred

const services = [
  {
    title: "Healthcare Services",
    imageUrl: "https://images.deepai.org/art-image/0d08df41773b4a7caf07eb55ac5a7c2a/a-simple-illustration-of-a-doctor-with-a-stethoscope-.jpg",
  },
  {
    title: "Pension & Finance",
    imageUrl: "https://images.deepai.org/art-image/796cb4dbb1d4411087e6c49bea5924ad/a-wallet-with-rupee-coins-and-a-pension-slip-with-an-.jpg",
  },
  {
    title: "Housing & Social Welfare",
    imageUrl: "https://images.deepai.org/art-image/8842a0b98855488ebca8645afdc6471a/a-small-home-icon-with-a-heart-inside-an-elderly-man-.jpg",
  },
  {
    title: "ID & Documentation",
    imageUrl: "https://images.deepai.org/art-image/dc9e272be0914eee9a077f24bd75cdc6/an-aadhaar-card-and-a-mobile-phone-showing-life-certi.jpg",
  },
  {
    title: "Travel & Transport",
    imageUrl: "https://images.deepai.org/art-image/416f2421aab648b3bf1849e0a279cbda/a-bus-and-train-icon-with-a-priority-seating-sign-and.jpg",
  },
  {
    title: "Legal & Emergency",
    imageUrl: "https://images.deepai.org/art-image/b2910b0da8ea4b1a8e555145e157b186/a-shield-icon-with-a-phone-number-14567-and-a-senior-.jpg",
  },
];

const GovernmentServices = () => {
  return (
    <div className="app-container">
      <h1>Government Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.imageUrl} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentServices;
