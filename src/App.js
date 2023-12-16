import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    question: 'What is the capital of India?',
    options: ['Kolkata', 'Delhi', 'Mumbai', 'Madras'],
    correctAnswer: 'Delhi',
  },
  {
    id: 3,
    question: 'Which among the following is a fruit?',
    options: ['Cabbage', 'Tomato', 'Potato', 'Apple'],
    correctAnswer: 'Apple',
  },
  // Add more questions as needed
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
  };
  // console.log("cur->",currentQuestion);
  // console.log("sco->",score);

  return (
    <div className="app">
      {currentQuestion < questions.length ? (
        <div className="question-container">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="score-container">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default App;

