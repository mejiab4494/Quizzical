import { useState } from 'react';
import questions from './questions';

export default function QuestionPage() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  function getQuestions() {
    return questions.map((q) => (
      <div key={q.id} className="question-block">
        <h3>{q.question}</h3>

        <div className="options">
          {q.options.map((opt, index) => {
            const isSelected = selectedAnswers[q.id] === opt;
            const isCorrect = q.answer === opt;

            let className = "option-btn";

            if (showResults) {
              if (isCorrect) {
                className += " correct";
              } else if (isSelected) {
                className += " wrong";
              }
            } else if (isSelected) {
              className += " selected";
            }

            return (
              <button
                key={index}
                onClick={() =>
                  setSelectedAnswers(prev => ({
                    ...prev,
                    [q.id]: opt
                  }))
                }
                className={className}
                disabled={showResults} // 🔒 disables after checking
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    ));
  }

  return (
    <>
      <div className="question-container">
        {getQuestions()}
      </div>

      <div className="check-container">
        <button
          onClick={() => setShowResults(true)}
          className="check-answers"
        >
          Check Answers
        </button>
      </div>
    </>
  );
}