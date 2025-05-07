import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      name: 'Netflix',
      imgSrc: 'https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png',
    },
    {
      name: 'Amazon',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      name: 'Prime Video',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
    },
    {
      name: 'Disney+ Hotstar',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg',
    },
  ];

  return (
    <div className="services-container">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.imgSrc} alt={service.name} />
            <a
              href={`https://www.${service.name.toLowerCase().replace(/\s+/g, '')}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              Visit {service.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
