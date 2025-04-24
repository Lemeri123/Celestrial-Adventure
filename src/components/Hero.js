import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const starRef = useRef(null);

  useEffect(() => {
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
      if (starRef.current) {
        starRef.current.style.animation = 'none';
        void starRef.current.offsetWidth; 
        starRef.current.style.animation = 'shoot 3s linear forwards';

        randomizeStar(starRef.current);

        const handleAnimationEnd = () => {
          const delay = 1000 + Math.random() * 4000;
          setTimeout(() => {
            animateStar();
          }, delay);
        };

        starRef.current.addEventListener('animationend', handleAnimationEnd, {
          once: true,
        });

        return () => {
          if (starRef.current) {
            starRef.current.removeEventListener(
              'animationend',
              handleAnimationEnd
            );
          }
        };
      }
    };

    animateStar();

    return () => {
      if (starRef.current) {
        starRef.current.style.animation = 'none';
      }
    };
  }, []);

  return (
    <div className="hero">
      <div className="shooting-stars">
        <div className="shooting-star" ref={starRef} />
      </div>
      <div className="navbar">
        <span className="logo">LEMERI</span>
        <div className="menu-icon">
          <div></div>
          <div></div>
        </div>
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
        <button className="arrow left">&lt;</button>
        <button className="arrow right">&gt;</button>
      </div>

      <div className="footer">
        <div className="socials"></div>
        <div className="page-number"></div>
      </div>
    </div>
  );
}

export default Hero;
