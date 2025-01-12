import React from 'react';
import '../styles/FAQ.css';

function FAQ() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <p className="faq-intro">Find answers to your most pressing questions about Mylo LabHub.</p>
      
      <div className="faq-grid">
        <div className="faq-item">
          <h3>What is Mylo LabHub?</h3>
          <p>Mylo LabHub is a comprehensive laboratory management platform designed to streamline research workflows, manage data, and enhance team collaboration in research environments.</p>
        </div>

        <div className="faq-item">
          <h3>How secure is my research data?</h3>
          <p>We implement industry-standard encryption and security protocols to ensure your research data remains private and secure. All data is backed up regularly and stored in compliance with international data protection standards.</p>
        </div>

        <div className="faq-item">
          <h3>Can I collaborate with external researchers?</h3>
          <p>Yes! Mylo LabHub supports secure collaboration features that allow you to share specific data and findings with external collaborators while maintaining control over access levels.</p>
        </div>

        <div className="faq-item">
          <h3>What type of support do you offer?</h3>
          <p>We provide 24/7 technical support, comprehensive documentation, video tutorials, and personalized training sessions for teams.</p>
        </div>

        <div className="faq-item">
          <h3>Is there a free trial available?</h3>
          <p>Yes, we offer a 30-day free trial with full access to all features, allowing you to evaluate how Mylo LabHub can benefit your research workflow.</p>
        </div>

        <div className="faq-item">
          <h3>Can I export my data?</h3>
          <p>Absolutely! You can export your data in multiple formats including CSV, Excel, PDF, and more, ensuring compatibility with other research tools.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
