import React from 'react';
import PropTypes from 'prop-types';

function Question({ question, image, answers, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="question">
      <h3>{question}</h3>
      {/* {image && <img src={image} alt="Question" />} */}
      {/* {!image && <img src={defaultImage} alt="Default Question" />} */}
      {answers.map((answer) => (
        <div key={answer.id} className="answer-option">
          <input
            type="radio"
            id={`answer-${answer.id}`}
            name="answer"
            value={answer.id}
            checked={selectedAnswer === answer.id}
            onChange={() => onAnswerSelect(answer.id)}
          />
          <label htmlFor={`answer-${answer.id}`}>{answer.text}</label>
        </div>
      ))}
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  image: PropTypes.string,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedAnswer: PropTypes.number,
  onAnswerSelect: PropTypes.func.isRequired,
};

Question.defaultProps = {
  image: null,
  selectedAnswer: null,
};

export default Question;



