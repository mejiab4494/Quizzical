import { useState, useMemo } from 'react';
import DragDrop from './draganddrop';
import questions from './questions';

export default function QuestionPage() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragAnswers, setDragAnswers] = useState({});

  const shuffledQuestions = useMemo(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  }, []);

  function getQuestions() {
    return shuffledQuestions.map((q) => {
      if (q.type === "dragdrop") return (
        <DragDrop
          key={q.id}
          q={q}
          showResults={showResults}
          dragAnswers={dragAnswers}
          draggedItem={draggedItem}
          setDragAnswers={setDragAnswers}
          setDraggedItem={setDraggedItem}
        />
      );

      return (
        <div key={q.id} className="question-block">
          <h3>{q.question}</h3>

  

          <div className="options">
            {q.options.map((opt, index) => {
              const isSelected = selectedAnswers[q.id] === opt;
              const isCorrect = Array.isArray(q.answer)
                ? q.answer.includes(opt)
                : q.answer === opt;

              let className = "option-btn";
              if (showResults) {
                if (isCorrect) className += " correct";
                else if (isSelected) className += " wrong";
              } else if (isSelected) {
                className += " selected";
              }

              return (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedAnswers(prev => ({ ...prev, [q.id]: opt }))
                  }
                  className={className}
                  disabled={showResults}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="question-container">
        {getQuestions()}
      </div>
      <div className="check-container">
        <button onClick={() => setShowResults(true)} className="check-answers">
          Check Answers
        </button>
      </div>
    </>
  );
}