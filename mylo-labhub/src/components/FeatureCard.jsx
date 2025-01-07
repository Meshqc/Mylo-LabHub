import React from 'react';
import PropTypes from 'prop-types';
import '../styles/FeatureCard.css';

function FeatureCard({ icon, title, description }) {
return (
    <div className="feature-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
);
}

// Props Validation
FeatureCard.propTypes = {
icon: PropTypes.node.isRequired,
title: PropTypes.string.isRequired,
description: PropTypes.string.isRequired,
};

export default FeatureCard;
