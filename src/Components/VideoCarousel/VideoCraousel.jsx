import React, { useState, useRef, useEffect } from 'react';

const slides = [
  {
    type: 'video',
    src: "/images/file.mp4",
  },
  {
    type: 'image',
    src: "/images/9.jpg",
  },
  {
    type: 'image',
    src: "/images/2.jpg",
  },
];

export default function File() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Pause all videos when slide changes
    videoRefs.current.forEach((video, index) => {
      if (video && index !== current) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container" >
      <div className="carousel-slide">
        {slides[current].type === 'video' ? (
          <video
            ref={(el) => (videoRefs.current[current] = el)}
            // controls
            width="100%"
            autoPlay
            muted
          >
            <source src={slides[current].src} type="video/mp4" />
          </video>
        ) : (
          <img src={slides[current].src} alt={`Slide ${current}`} />
        )}
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide}>⟵</button>
        <button onClick={nextSlide}>⟶</button>
      </div>
      <style jsx>{`
        .carousel-container {
          width: 100%;
          text-align: center;
          position: relative;
        }
        // .carousel-slide {
        //   max-height: 500px;
        // }
        img,
        video {
          max-width: 100%;
          // max-height: 500px;
          object-fit: contain;
        }
        .carousel-controls button {
          margin: 10px;
          padding: 10px 20px;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}
