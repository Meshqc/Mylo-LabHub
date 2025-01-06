import React from 'react';
import '../styles/Home.css';

function Home() {
return (
    <div className="home-page">
    <header className="hero">
        <h1>Revolutionizing Science, One Experiment at a Time</h1>
        <p>Advanced tools for streamlined research management.</p>
        <button className="btn primary">Get Started</button>
    </header>
    <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
        <div className="feature-card">Digital Lab Notebook</div>
        <div className="feature-card">AI Research Insights</div>
        <div className="feature-card">Team Collaboration</div>
        </div>
    </section>
    </div>
);
}

export default Home;
