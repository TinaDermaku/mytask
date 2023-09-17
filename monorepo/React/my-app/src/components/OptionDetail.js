import React from 'react';

function OptionDetail({ selectedOption, handleBackButtonClick }) {
  return (
    <div>
      <h2>Option Detail</h2>
      <p>Selected Option: {selectedOption}</p>
      <button onClick={handleBackButtonClick}>Back to Selection</button>
    </div>
  );
}

export default OptionDetail;
