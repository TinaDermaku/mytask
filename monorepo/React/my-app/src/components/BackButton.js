import React from 'react';

const BackButton = ({ onBackClick }) => {
  return (
    <button className="back-button" onClick={onBackClick}>
      Back
    </button>
  );
};

export default BackButton;
