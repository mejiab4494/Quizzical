import { useState } from "react";
import questions from "./questions";

export default function DragDrop({ q, showResults, dragAnswers, draggedItem, setDragAnswers, setDraggedItem }) {
  return (
    <div className="question-block">
      <h3>{q.question}</h3>
      <img src={q.image} alt="diagram" className="diagram" />

      <div className="drop-zones">
        {[1,2,3,4,5,6,7,8].map((num) => (
          <div
            key={num}
            className={`drop-box ${
              showResults
                ? dragAnswers[num] === q.answer[num] ? "correct" : "wrong"
                : ""
            }`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => setDragAnswers(prev => ({ ...prev, [num]: draggedItem }))}
          >
            <strong>{num}</strong>
            <div>{dragAnswers[num]}</div>
          </div>
        ))}
      </div>

      <div className="labels">
        {q.labels.map((label, i) => (
          <div
            key={i}
            draggable
            onDragStart={() => setDraggedItem(label)}
            className="label"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}