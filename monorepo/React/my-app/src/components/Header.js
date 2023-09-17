import React from 'react';

function Header({ currentStep }) {
    
  return (
    <header>
      <div className="step-indicator">
        Step {currentStep}/2
      </div>
    </header>
  );
}

export default Header;
