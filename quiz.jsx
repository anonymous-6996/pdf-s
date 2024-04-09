import React, { useState } from 'react';

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'London', isCorrect: false }
      ]
    },
    {
      questionText: 'Which planet is known as the Red Planet?',
      answerOptions: [
        { answerText: 'Venus', isCorrect: false },
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Saturn', isCorrect: false }
      ]
    },
    {
      questionText: 'Who wrote "To Kill a Mockingbird"?',
      answerOptions: [
        { answerText: 'Harper Lee', isCorrect: true },
        { answerText: 'Stephen King', isCorrect: false },
        { answerText: 'J.K. Rowling', isCorrect: false },
        { answerText: 'Charles Dickens', isCorrect: false }
      ]
    }
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h1>Quiz Completed!</h1>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h1>Quiz App</h1>
          <div>
            <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
            <p>{questions[currentQuestionIndex].questionText}</p>
            {questions[currentQuestionIndex].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizApp;

