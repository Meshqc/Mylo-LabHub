import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import '../styles/Home.css';

function Home() {
return (
    <div className="home">
    <HeroSection />
    <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
        <FeatureCard icon="🔬" title="Advanced Analytics" description="Detailed insights and analytics for experiments." />
        <FeatureCard icon="💾" title="Secure Storage" description="Store and manage data safely." />
        <FeatureCard icon="🤝" title="Team Collaboration" description="Seamless team communication tools." />
        </div>
    </section>
    </div>
);
}

export default Home;
