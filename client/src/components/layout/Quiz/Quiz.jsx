import React, { useEffect, useState } from 'react';
import SubQuiz from './SubQuiz';
function Quiz() {
  const [questions,setQuestions] = useState([]);
  const fetchQuestions = async (num) => {
    const response = await fetch('http://localhost:5000/dashboard/questions/'+num,{
      method: "GET"});
    const fetchQuestions = await response.json();
    setQuestions(fetchQuestions);
  }

  useEffect(()=>{
    fetchQuestions(1);  
  },[]);
 
  return (
    <div className='quiz-page'>
      <div className='ques--page'>
        <button className="btn btn-dark">CSE</button>
        <SubQuiz questions={questions.slice(0,5)}/>

        <button className="btn btn-dark">Electrical</button>
        <SubQuiz questions={questions.slice(5,7)}/>

        <button className="btn btn-dark">Mechnanical</button>
        <SubQuiz questions={questions.slice(2,5)}/>

        <button className="btn btn-dark">Logical</button>
        <SubQuiz questions={questions.slice(3,5)}/>

        <button className="btn btn-dark">Management</button>
        <SubQuiz questions={questions.slice(4,7)}/>

      </div>
      <button type='submit' className='btn btn-success'>Finish Quiz</button>
    </div>
    
  );
}

export default Quiz;
