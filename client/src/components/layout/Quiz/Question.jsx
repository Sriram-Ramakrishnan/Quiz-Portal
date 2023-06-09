import React, { useState } from 'react';

function Question({ questionData }) {
  const { q_id, question, option1, option2, option3, option4 } = questionData;
  const [selectedOption, setSelectedOption] = useState(localStorage.getItem(q_id) || '');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSaveAnswer = (event) => {
    event.preventDefault();
    localStorage.setItem(q_id, selectedOption);
  };

  const handleClearAnswer = (event) => {
    event.preventDefault();
    setSelectedOption('');
    localStorage.removeItem(q_id);
  };

  return (
    <form>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem', padding: '1rem', border: '1px solid black', borderRadius: '10px', boxShadow: '3px 3px 3px grey' }}>
        <h3>{question}</h3>
        <div className='question'>
          <label>
            <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} />
            {option1}
          </label>
          <label>
            <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange} />
            {option2}
          </label>
          <label>
            <input type="radio" value="option3" checked={selectedOption === 'option3'} onChange={handleOptionChange} />
            {option3}
          </label>
          <label>
            <input type="radio" value="option4" checked={selectedOption === 'option4'} onChange={handleOptionChange} />
            {option4}
          </label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '1rem', padding: '1rem' }}>
          <button type="button" className='btn btn-success' onClick={handleSaveAnswer}>Save answer</button>
          <button type='button' className='btn btn-danger' onClick={handleClearAnswer}>Clear answer</button>
        </div>
      </div>
    </form>
  );
}

export default Question;

