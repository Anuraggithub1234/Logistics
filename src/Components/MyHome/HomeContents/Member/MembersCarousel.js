import React from 'react';
import Slider from 'react-slick';
import './MembersCarousel.scss';

const MembersCarousel = () => {
  const logos = [
    '/images/Logo1.png',
    '/images/Logo2.png',
    '/images/Logo3.png',
    '/images/Logo4.png',
    '/images/Logo5.png',
    '/images/Logo6.png',
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="members-section">
      <h2 className="highlight">WE ARE MEMBERS</h2>
      <Slider {...settings} className="logo-carousel">
        {logos.map((logo, index) => (
          <div key={index} className="logo-slide">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MembersCarousel;
