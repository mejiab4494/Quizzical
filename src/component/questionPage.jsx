import { useState, useMemo } from 'react';
import DragDrop from './draganddrop';
import questions from './questions';

const QUESTIONS_PER_PAGE = 5;

export default function QuestionPage() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragAnswers, setDragAnswers] = useState({});
  const [pageIndex, setPageIndex] = useState(0);

  // Build pages: dragdrop questions get their own page, others are grouped in 5s
  const pages = useMemo(() => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const result = [];
    let buffer = [];

    for (const q of shuffled) {
      if (q.type === 'dragdrop') {
        if (buffer.length > 0) {
          // Flush buffered regular questions in chunks of 5
          for (let i = 0; i < buffer.length; i += QUESTIONS_PER_PAGE) {
            result.push(buffer.slice(i, i + QUESTIONS_PER_PAGE));
          }
          buffer = [];
        }
        result.push([q]); // dragdrop gets its own page
      } else {
        buffer.push(q);
        if (buffer.length === QUESTIONS_PER_PAGE) {
          result.push(buffer);
          buffer = [];
        }
      }
    }

    if (buffer.length > 0) {
      for (let i = 0; i < buffer.length; i += QUESTIONS_PER_PAGE) {
        result.push(buffer.slice(i, i + QUESTIONS_PER_PAGE));
      }
    }

    return result;
  }, []);

  const currentPage = pages[pageIndex] ?? [];
  const isLastPage = pageIndex === pages.length - 1;
  const pageChecked = showResults[pageIndex] ?? false;

  function renderQuestion(q) {
    if (q.type === 'dragdrop') {
      return (
        <DragDrop
          key={q.id}
          q={q}
          showResults={pageChecked}
          dragAnswers={dragAnswers}
          draggedItem={draggedItem}
          setDragAnswers={setDragAnswers}
          setDraggedItem={setDraggedItem}
        />
      );
    }

    return (
      <div key={q.id} className="question-block">
        <h3>{q.question}</h3>
        <div className="options">
          {q.options.map((opt, index) => {
            const isSelected = selectedAnswers[q.id] === opt;
            const isCorrect = Array.isArray(q.answer)
              ? q.answer.includes(opt)
              : q.answer === opt;

            let className = 'option-btn';
            if (pageChecked) {
              if (isCorrect) className += ' correct';
              else if (isSelected) className += ' wrong';
            } else if (isSelected) {
              className += ' selected';
            }

            return (
              <button
                key={index}
                onClick={() =>
                  setSelectedAnswers(prev => ({ ...prev, [q.id]: opt }))
                }
                className={className}
                disabled={pageChecked}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="question-container">
        {currentPage.map(renderQuestion)}
      </div>

      <div className="check-container">
        {isLastPage && !pageChecked && (
          <button
            className="check-answers"
            onClick={() => {
              const allChecked = {};
              pages.forEach((_, i) => { allChecked[i] = true; });
              setShowResults(allChecked);
              setPageIndex(0) // will show results starting from first page
             }}
        >
            Check Answers
          </button>
  )}
        <div className="nav-buttons">
          {pageIndex > 0 && (
            <button
              className="previous-page"
              onClick={() => setPageIndex(i => i - 1)}
            >
              ← Previous
            </button>
          )}

          {!isLastPage && (
            <button
              className="next-page"
              onClick={() => setPageIndex(i => i + 1)}
            >
              Next →
            </button>
          )}
        </div>

        <span className="page-indicator">
          Page {pageIndex + 1} of {pages.length}
        </span>
      </div>
    </>
  );
}