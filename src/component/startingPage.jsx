import { useState, useEffect } from "react"
import QuestionPage from "./questionPage.jsx"
import NavButtons from "./navButtons.jsx"

export default function StartingPage() {
  const [page, setPage] = useState("home")

  const navigateTo = (newPage) => {
    window.history.pushState({ page: newPage }, "", `#${newPage}`)
    setPage(newPage)
  }

  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state?.page) {
        setPage(e.state.page)
      } else {
        setPage("home")
      }
    }

    window.history.replaceState({ page: "home" }, "", "#home")
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  return (
    <>
      <NavButtons page={page} setPage={navigateTo} />  {/* ✅ navigateTo */}

      {page !== "home" && (
        <button onClick={() => navigateTo("home")} className="home-widget">  {/* ✅ navigateTo */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </button>
      )}

      {page === "quiz" && <QuestionPage />}

      {page === "home" && (
        <div className="centered-container">
          <h1>Quizzical</h1>
          <p>Trivia Quiz App</p>
          <button onClick={() => navigateTo("quiz")} className="start-btn">  {/* ✅ navigateTo */}
            Start quiz
          </button>
        </div>
      )}
    </>
  )
}