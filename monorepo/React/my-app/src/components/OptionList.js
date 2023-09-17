import React from 'react';

function OptionList({ handleOptionSelect }) {
  const options = ["Intern", "Junior", "Senior", "Super Senior :D"];

  return (
    <div>
      <h2>Options</h2>
      <ul className="option-list">
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionSelect(option)}
            style={{ cursor: 'pointer' }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OptionList;
