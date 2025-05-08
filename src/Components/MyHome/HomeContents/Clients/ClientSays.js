import React from 'react';
import Slider from 'react-slick';
import './ClientSays.scss';

const ClientSays = () => {
  const testimonials = [
    {
      quote:
        "I have always found Nav Logistic Inc employees to be smart and professional and easy to communicate with. My long experience with Nav Logistic Inc accounting has been a good one.",
      name: "Jagsir Singh",
      location: "New York",
      avatar: "/images/Avatar2.png",
    },
    {
      quote:
        "Nav Logistic Inc is the best logistics company to work with. Their team is professional and reliable.",
      name: "Amarjeet Kaur",
      location: "California",
      avatar: "/images/Avatar1.png",
    },
    {
      quote:
        "Quick response and always available. They have never let us down on delivery timelines.",
      name: "Michael Smith",
      location: "Texas",
      avatar: "/images/Avatar2.png",
    },
    {
      quote:
        "I highly recommend Nav Logistic Inc for any transportation needs. They’re truly dependable.",
      name: "Priya Mehra",
      location: "New Jersey",
      avatar: "/images/Avatar1.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="client-says-section">
      <h4>OUR HAPPY</h4>
      <h2 className="highlight">CLIENT SAYS</h2>
      <p className="intro-text">{testimonials[0].quote}</p>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div className="testimonial-slide" key={index}>
            <div className="testimonial-box">
              <p>“ {t.quote} ”</p>
            </div>
            <div className="testimonial-bottom">
              <div className="avatar-wrapper">
                <img src={t.avatar} alt="avatar" />
              </div>
              <div className="client-info">
                <h3>{t.name}</h3>
                <span>{t.location}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClientSays;
