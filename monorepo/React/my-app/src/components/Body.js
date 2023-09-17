import React from 'react';
import OptionList from './OptionList'; 

function Body({ handleOptionSelect }) {
  return (
    <main className="body-container">
      <OptionList handleOptionSelect={handleOptionSelect} /> 
    </main>
  );
}

export default Body;
