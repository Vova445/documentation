import React, { useState, useEffect } from 'react';
import './slider.css';

const ScrollSlider = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setIsVisible(currentPosition > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-slider ${isVisible ? 'show' : ''}`}>
      <div className="slider-button top" onClick={scrollToTop}>
        <div className="custom-arrow"></div>
      </div>
    </div>
  );
};

export default ScrollSlider;
