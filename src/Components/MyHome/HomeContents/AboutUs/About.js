import React, { useState } from 'react';
import './About.scss';
import { Link } from 'react-router-dom';

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
        <p>For over five years, Ghost Trucking Inc., Inc. has provided services to the ports of Oakland and Los Angeles/Long Beach. Our areas of expertise include heavy haul, over-the-road, intermodal, drayage, and yard storage solutions. More than 100+ corporate drivers and owner-operators can utilize all of these services.

We have worked with several clients in the area since our beginnings. Experienced and amiable workers are the foundation of great service, which is why we take great care in choosing the finest candidates to join our team. We go above and above to build enduring connections with our clients in addition to completing projects effectively and on time.</p>
        
         <Link to="/about" >
           <button className="outline-btn">Read More</button>
          </Link>
        
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
