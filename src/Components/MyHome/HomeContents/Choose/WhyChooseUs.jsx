import React from 'react';
import './WhyChooseUs.scss';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: 'fas fa-shield-alt',
    title: 'CUSTOMIZED SOLUTIONS',
  },
  {
    icon: 'fas fa-shipping-fast',
    title: 'TECHNOLOGY-DRIVEN',
  },
  {
    icon: 'fas fa-project-diagram',
    title: 'RELIABLE NETWORK',
  },
  {
    icon: 'fas fa-trophy',
    title: 'CUSTOMER-CENTRIC APPROACH',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>WHY CHOOSE US</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="icon"><i className={feature.icon}></i></div>
            <h4>{feature.title}</h4>
          </div>
        ))}
      </div>
      <Link to="/about"><button className="btn btn-outline-danger">Read More</button></Link>
    </section>
  );
};

export default WhyChooseUs;
