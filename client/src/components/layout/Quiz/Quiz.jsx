import React, { useState } from 'react';
import Questionnaire from './Questionnaire';
import questionsData from '../questionsData.json'

function Quiz() {
  const [currentPage, setCurrentPage] = useState(1);
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  

  return (
    <div className='quiz-page'>
      <div className='sub--header'>
        <button onClick={() => handleClick(1)} className="btn btn-dark">CSE</button>
        <button onClick={() => handleClick(2)} className="btn btn-dark">Electrical</button>
        <button onClick={() => handleClick(3)} className="btn btn-dark">Mechnanical</button>
        <button onClick={() => handleClick(4)} className="btn btn-dark">Logical</button>
        <button onClick={() => handleClick(5)} className="btn btn-dark">Management</button>
      </div>
      <div className='ques--page'>
        {currentPage === 1 && <Questionnaire questionsData={questionsData[0]}/>}
        {currentPage === 2 && <Questionnaire questionsData={questionsData[1]}/>}
        {currentPage === 3 && <Questionnaire questionsData={questionsData[2]}/>}
        {currentPage === 4 && <Questionnaire questionsData={questionsData[3]}/>}
        {currentPage === 5 && <Questionnaire questionsData={questionsData[4]}/>}
      </div>
      <button type='submit' className='btn btn-success'>Finish Quiz</button>
    </div>
  );
}

export default Quiz;
