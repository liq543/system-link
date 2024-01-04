import React from 'react';
import '../assets/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <h1 className="heading">SYSTEM LINK</h1>
      <div className="panel-container">
        {/* Generate panels here */}
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className={`panel panel-${index + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
