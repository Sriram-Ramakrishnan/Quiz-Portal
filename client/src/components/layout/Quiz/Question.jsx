import React, { useState } from 'react';

function Question({questionData}) {
  const {q_id,question,option1,option2,option3,option4} = questionData; 
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Store selected option in local storage here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem', padding: '1rem', border: '1px solid black', borderRadius: '10px', boxShadow: '3px 3px 3px grey' }}>
        <h3>{question}</h3>
        {/* {image && <img src={image} alt="Question" style={{ maxWidth: '100%', marginBottom: '1rem' }} />} */}
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
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '1rem', padding: '1rem'}}>
        <button type="submit" className='btn btn-success'>Save answer</button>
        <button type='submit' className='btn btn-danger'>Clear answer</button>
        </div>
      </div>
    </form>
  );
}

export default Question;
