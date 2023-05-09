import React from 'react';
import Question from './Question';

function SubQuiz({ questions }) {
  return (
    <div>
      {questions.map((question) => (
        <Question key={question.q_id} questionData={question} />
      ))}
    </div>
  );
}

export default SubQuiz;
