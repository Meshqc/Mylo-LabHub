import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
return (
    <section className="hero-section">
    <div className="hero-content">
        <h1>Empowering Research Innovation</h1>
        <p>Streamline your experiments, manage data efficiently, and collaborate seamlessly.</p>
        <div className="hero-buttons">
        <button className="btn primary">Get Started</button>
        <button className="btn secondary">Learn More</button>
        </div>
    </div>
    <div className="hero-image">
        <img src="/assets/hero-image.png" alt="Research Lab" />
    </div>
    </section>
);
}

export default HeroSection;
