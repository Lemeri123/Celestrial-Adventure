import React, { useEffect, useRef } from 'react';
import './Hero.css';
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa';

function Hero() {
  const starRef = useRef(null);

  useEffect(() => {
    const starElement = starRef.current;

    if (!starElement) return;

    const randomizeStar = (star) => {
      const startX =
        Math.random() > 0.5
          ? `${-100 - Math.random() * 50}px`
          : `${Math.random() * window.innerWidth}px`;

      const startY =
        Math.random() > 0.5
          ? `${-100 - Math.random() * 50}px`
          : `${Math.random() * window.innerHeight}px`;

      const endX = startX.includes('-')
        ? window.innerWidth + 100
        : -100 - Math.random() * 200;

      const endY = startY.includes('-')
        ? window.innerHeight + 100
        : -100 - Math.random() * 200;

      star.style.setProperty('--start-x', startX);
      star.style.setProperty('--start-y', startY);
      star.style.setProperty('--end-x', `${endX}px`);
      star.style.setProperty('--end-y', `${endY}px`);
    };

    const animateStar = () => {
      starElement.style.animation = 'none';
      void starElement.offsetWidth;
      starElement.style.animation = 'shoot 3s linear forwards';

      randomizeStar(starElement);

      const handleAnimationEnd = () => {
        const delay = 1000 + Math.random() * 4000;
        setTimeout(() => {
          animateStar();
        }, delay);
      };

      starElement.addEventListener('animationend', handleAnimationEnd, {
        once: true,
      });

      return () => {
        starElement.removeEventListener('animationend', handleAnimationEnd);
      };
    };

    const cleanup = animateStar();

    return () => {
      if (cleanup) cleanup();
      starElement.style.animation = 'none';
    };
  }, []);

  return (
    <div className="hero">
      <div className="shooting-stars">
        <div className="shooting-star" ref={starRef} />
      </div>

      <div className="planet" />

      <div className="content">
        <h1 className="title">CELESTIAL</h1>
        <h2 className="subtitle">ADVENTURE</h2>
        <p className="desc">
          A Revolution that will transport users to new worlds of wonder and
          possibility
        </p>
        <button className="get-started">GET STARTED</button>
      </div>

      <div className="navigation">
        <button className="arrow left">
          <FaArrowLeft />
        </button>
        <button className="arrow right">
          <FaArrowRight />
        </button>
      </div>

      <div className="footer">
        <div className="socials"></div>
        <div className="page-number"></div>
      </div>
    </div>
  );
}

export default Hero;
