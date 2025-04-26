import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { Grid, Row, Column } from '@carbon/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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

      {/* Navigation Arrows */}
      {/* <div className="navigation-arrows"> 
        <button className="arrow left">
          <FaArrowLeft />
        </button>
        <button className="arrow right">
          <FaArrowRight />
        </button>
      </div> */}

      <Grid fullWidth>
        <Row>
          <Column lg={8} md={6} sm={4} className="content">
            <h1 className="title">CELESTIAL</h1>
            <h2 className="subtitle">ADVENTURE</h2>
            <p className="desc">
              A Revolution that will transport users to new worlds of wonder and
              possibility
            </p>
            <button className="get-started">GET STARTED</button>
          </Column>
        </Row>

        <Row className="footer">
          <Column lg={8} md={6} sm={4}>
            <div className="socials"></div>
            <div className="page-number"></div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
}

export default Hero;
