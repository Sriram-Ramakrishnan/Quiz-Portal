import React, { useState } from 'react';
import questionsData from '../questionsData.json'

function Quiz() {

  return (
    <div className='quiz-page'>
      <div className='sub--header'>
        <button className="btn btn-dark">CSE</button>
        <button className="btn btn-dark">Electrical</button>
        <button className="btn btn-dark">Mechnanical</button>
        <button className="btn btn-dark">Logical</button>
        <button className="btn btn-dark">Management</button>
      </div>
      <div className='ques--page'>
        Question bank goes here
      </div>
      <button type='submit' className='btn btn-success'>Finish Quiz</button>
    </div>
  );
}

export default Quiz;
