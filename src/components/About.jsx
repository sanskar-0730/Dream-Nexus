import React from 'react';
import './About.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='about'>

      <div className='paragraphs'>

        <p>
          Welcome to <b>Dream Nexus</b>! I’m <b>Sanskar Gupta</b>, passionate about helping people achieve 
          <b> better health, personal growth, and financial freedom</b>. 
          I believe everyone deserves the chance to live a life full of 
          energy, purpose, and independence.
        </p>

        <p>
          Through <b>Dream Nexus</b>, I share <b>simple yet powerful strategies </b> 
          for improving wellness, building confidence, and creating additional income streams. 
          This platform isn’t just about products or business — it’s about designing a lifestyle that gives you 
          <b> more time, choices, and freedom</b>.
        </p>

        <p>
          At <b>Dream Nexus</b>, I connect with people from all walks of life to explore 
          opportunities that align with their <b>goals, values, and vision</b>. 
          Together, we create realistic, actionable steps toward long-term success.
        </p>

        <p>
          Here, you’ll find resources, ideas, and inspiration designed to help you:
        </p>

        <ul>
          <li>Improve daily health and energy naturally</li>
          <li>Develop skills for personal and professional growth</li>
          <li>Explore income opportunities for a more secure future</li>
        </ul>

        <p>
          If you’re ready to make a change, let’s connect and explore how <b>Dream Nexus </b> 
          can help you build your success story with guidance from <b>Sanskar Gupta</b>.
        </p>

        <div className="cta">
          <button 
            className="cta-btn"
            onClick={() => navigate('/register')}
          >
            Let’s Connect
          </button>
        </div>

      </div>

    </div>
  );
};

export default About;