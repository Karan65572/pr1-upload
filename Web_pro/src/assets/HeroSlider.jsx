// HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    heading: "Where Happy Beginnings Take Root",
    subtext: "A warm, safe, and joyful space for your child's first learning adventure",
    buttonText: "Schedule a Tour",
    buttonLink: "/visit",
    bgImage: "https://happybeginnings.ca/wp-content/uploads/2021/10/main.png",
  },
  {
    id: 2,
    heading: "Play, Discover, Blossom",
    subtext: "Engaging play-based learning, stories, music, art & early skill-building",
    buttonText: "Explore Our Program",
    buttonLink: "/program",
    bgImage: "https://tse1.mm.bing.net/th/id/OIP.4nQCsg0NIaytSEHh8B84VgHaEJ?pid=Api&h=220&P=0",
  },
  {
    id: 3,
    heading: "Nurturing Curious Minds & Kind Hearts",
    subtext: "Holistic growth in a loving, child-centered preschool environment",
    buttonText: "Admissions Open – Enquire Now",
    buttonLink: "/admissions",
    bgImage: "https://tse1.mm.bing.net/th/id/OIP.BViXUqFRCvG7ivzsvOcjSwHaHa?pid=Api&h=220&P=0",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // slightly longer for better reading time

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-slider">
      <div className="slides-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
            }}
          >
            <div className="slide-overlay" />
            <div className="slide-content">
              <h1 className="slide-heading">{slide.heading}</h1>
              <p className="slide-subtext">{slide.subtext}</p>
              <a href={slide.buttonLink} className="hero-btn">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Uncomment below block if you want manual navigation */}
      {/* 
      <button
        className="nav-arrow prev"
        onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        className="nav-arrow next"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        ❯
      </button>

      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      */}
    </section>
  );
};

export default HeroSlider;