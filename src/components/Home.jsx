import React from "react";
import "./Home.css";
import my_image from "/my_image.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <h1 className="headline">
            Welcome to <span className="brand">Dream Nexus.</span>
          </h1>
          <p className="intro">
            I’m <span className="name">Sanskar Gupta</span>, here to help you grow.
          </p>
          <button 
            className="cta-btn"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img src={my_image} alt="Sanskar Gupta" />
        </div>
      </section>

      <hr className="section-divider" />

      <section className="services">
        <h2>What I Offer</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Wellness Guidance</h3>
            <p>Trusted solutions for a healthier, more energetic lifestyle.</p>
          </div>
          <div className="card">
            <h3>Growth Opportunities</h3>
            <p>Learn how to create sustainable growth for your future.</p>
          </div>
          <div className="card">
            <h3>Personal Support</h3>
            <p>One-on-one mentoring to help you achieve your goals.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="final-cta">
        <h2>Ready to Take the Next Step?</h2>
        <button 
          className="cta-btn"
          onClick={() => navigate("/register")}
        >
          Connect with Me
        </button>
      </section>

    </div>
  );
};

export default Home;