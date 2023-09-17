import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import OptionDetail from './components/OptionDetail';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setCurrentStep(2);
    setSelectedOption(option);
  };

  const handleBackButtonClick = () => {
    // Navigate back to step 1
    setCurrentStep(1);
    setSelectedOption(null); // Clear the selected option when going back
  };

  return (
    <div className="App">
      <Header currentStep={currentStep} />
      {currentStep === 1 ? (
        <Body handleOptionSelect={handleOptionSelect} />
      ) : (
        <OptionDetail
          selectedOption={selectedOption}
          handleBackButtonClick={handleBackButtonClick}
        />
      )}
   
    </div>
  );
}

export default App;
