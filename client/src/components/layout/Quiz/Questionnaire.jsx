import React, { useState } from 'react';
import Question from './Question';

function Questionnaire({questionsData}) {
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questionsData.length).fill(null));

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div>
      {questionsData.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          image={question.image}
          answers={question.answers}
          selectedAnswer={selectedAnswers[index]}
          onAnswerSelect={(answerIndex) => handleAnswerSelect(index, answerIndex)}
        />
      ))}
    </div>
  );
}

export default Questionnaire;
