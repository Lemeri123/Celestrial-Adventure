import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
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
          A Revolution that will transport users to new worlds of wonder and possibility
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
