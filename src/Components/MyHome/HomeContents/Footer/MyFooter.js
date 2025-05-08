import React from 'react';
import './MyFooter.scss';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaFax, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-col">
          <h4>ABOUT US</h4>
          <p>
            Nav Logistics Inc. is a leading non-asset-based Third-Party Logistics (3PL) provider,
            dedicated to delivering comprehensive supply chain solutions tailored to meet the unique
            needs of your business.
          </p>
          <a href="#">Read More...</a>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>NAVIGATION</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shippers</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><a href="#">Brokerage</a></li>
            <li><a href="#">Road Freight</a></li>
            <li><a href="#">Time Sensitive And High-value</a></li>
            <li><a href="#">Air Freight Transportation</a></li>
            <li><a href="#">Warehousing</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>CONTACT US</h4>
          <p><FaMapMarkerAlt /> <strong>Physical Address:</strong><br />13105 Northwest Fwy, Suite 218<br />Houston, TX 77040</p>
          <p><FaMapMarkerAlt /> <strong>Mailing Address:</strong><br />28610 Hwy 290, Ste F-09 #316<br />Cypress, TX, 77433</p>
          <p><FaPhoneAlt /> Telephone: (713)-277-3713</p>
          <p><FaFax /> Fax: (713)-344-1413</p>
          <p><FaGlobe /> Web: www.nlius.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="billing-info">
          <strong>FOR BILLING RELATED QUERIES</strong><br />
          <FaEnvelope /> billing@nlius.com
        </div>

        <div className="copyright">
          Copyright © 2020 Nav Logistics Inc. All rights reserved.
        </div>
        
        <div className="social-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
        </div>

       
      </div>
    </footer>
  );
};

export default MyFooter;
