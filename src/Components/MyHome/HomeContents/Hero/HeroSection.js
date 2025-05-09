// import React from 'react';
// import './HeroSection.scss';

// const HeroSection = () => {
//   return (
//     <div className="hero-section" style={{ backgroundImage: "url('/images/5.jpg')" }}>
//       <div className="overlay">
//         <h1>WE ARE DEDICATED TO PROVIDE THE BEST SERVICES</h1>
//         <h2>AT THE LOWEST POSSIBLE COST</h2>
//         <button className="cta-button">GET A QUOTE</button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React, { useEffect, useState } from 'react';
import './HeroSection.scss';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage: "url('/images/BG6.jpg')",
          transform: `translateY(-${offsetY * 0.3}px)`, // move with scroll but slower
        }}
      />
      <div className="hero-content container text-center text-white">
        <h1 className="hero-title">
          WE ARE DEDICATED TO PROVIDE THE BEST SERVICES <br /> AT THE LOWEST POSSIBLE COST
        </h1>
        <div className="hero-buttons mt-4">
         <Link to="/service"> <button className="btn btn-danger me-3">SERVICES</button></Link>
          <button className="btn btn-danger">GET A QUOTE</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
