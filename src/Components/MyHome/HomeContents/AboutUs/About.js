import React, { useState } from 'react';
import './About.scss';

const tabs = [
  { key: 'mission', label: 'Our Mission', icon: '🚚' },
  { key: 'vision', label: 'Our Vision', icon: '✈️' },
  { key: 'goal', label: 'Our Goal', icon: '🏗️' }
];

function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="about-section">
      <div className="left">
        <h2>About Us</h2>
        <p>Nav Logistics Inc. is a leading non-asset-based Third-Party Logistics (3PL) provider...</p>
        <p>We address logistics challenges for companies worldwide, across various industries...</p>
        <p>We excel in simplifying the logistics process, enabling you to concentrate...</p>
        <button className="outline-btn">Read More</button>
      </div>

      <div className="right">
        <div className="tab-header">
          {tabs.map(tab => (
            <div
              key={tab.key}
              className={`tab-item ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <div className="tab-icon">{tab.icon}</div>
              <div>{tab.label}</div>
            </div>
          ))}
        </div>

        <div className="tab-content">
          <h4>{tabs.find(t => t.key === activeTab)?.label}</h4>
          <p>
            {activeTab === 'mission' && 'At Nav Logistics Inc., our mission is to revolutionize logistics by prioritizing freight security...'}
            {activeTab === 'vision' && 'Our vision is to create a seamless logistics experience by investing in future-forward technologies...'}
            {activeTab === 'goal' && 'Our goal is to become the most trusted logistics partner globally by ensuring transparency and reliability...'}
          </p>
          <button className="outline-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
