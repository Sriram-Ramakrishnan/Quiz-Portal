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

 async function handleAnswerSubmit() {
    const email = localStorage.getItem('user_email');
    // Pull all answers
    var answers = []
    questions.forEach((question)=>{
      var answer = new String(localStorage.getItem(question.q_id));
      answers.push(answer[6]);
    });
    questions.forEach((question)=>{
      localStorage.removeItem(question.q_id)
    });
    answers = answers.toString();
    console.log(answers);
    const answerList = {email, answers}
    const body = JSON.stringify(answerList);
    const response = await fetch('http://localhost:5000/dashboard/answers/',{
      method: "PUT",
      headers: {
        'Content-Type':'application/json',
         token: localStorage.token
      },
      body: body
    });
    navigate('/dashboard', {replace: true});
  }
 
  return (
    <div className='quiz-page'>
      <div className='ques--page'>
        <button className="btn btn-dark">CSE</button>
        <SubQuiz questions={questions.slice(0,5)}/>

        <button className="btn btn-dark">Electrical</button>
        <SubQuiz questions={questions.slice(5,7)}/>

        <button className="btn btn-dark">Mechnanical</button>
        <SubQuiz questions={questions.slice(7,8)}/>

        <button className="btn btn-dark">Logical</button>
        <SubQuiz questions={questions.slice(3,5)}/>

        <button className="btn btn-dark">Management</button>
        <SubQuiz questions={questions.slice(4,7)}/>

      </div>
      <button type='submit' className='btn btn-success' onClick={() =>{handleAnswerSubmit()}}>Finish Quiz</button>
    </div>
    
  );
}

export default Quiz;
