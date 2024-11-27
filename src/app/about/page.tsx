import React from 'react';
import AboutSection from '../components/AboutSection';
import { BackgroundBeamsWithCollision } from '../components/BackgroundBeamsWithCollision';

const About = () => {
  return (
    <main className="page-container">
      <BackgroundBeamsWithCollision>
      <div className="page-section">
        <AboutSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  )
}

export default About;
