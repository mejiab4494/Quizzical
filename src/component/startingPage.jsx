import { useState } from "react"
import QuestionPage from "./questionPage.jsx"
import NavButtons from "./navButtons.jsx"

export default function StartingPage() {
  const [page, setPage] = useState("home") // "home" | "quiz"

  return (
    <>
      <NavButtons page={page} setPage={setPage} />
      {/* Home button always visible except on home screen */}
      {page !== "home" && (
        <button onClick={() => setPage("home")} className="home-widget">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </button>
      )}

      {page === "home" && (
        <div className="centered-container">
          <h1>Quizzical</h1>
          <p>Trivia Quiz App</p>
          <button onClick={() => setPage("quiz")} className="start-btn">
            Start quiz
          </button>
        </div>
      )}

      {page === "quiz" && <QuestionPage />}
    </>
  )
}