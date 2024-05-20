import React, { useState, useEffect } from 'react';

const BottomToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down 200px from the top
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className={`btn-bottom-to-top ${isVisible ? 'show' : 'hide'}`}onClick={scrollToTop}   >  <span className='fa fa-long-arrow-up'></span>  </button>
  );
};

export default BottomToTopButton;
