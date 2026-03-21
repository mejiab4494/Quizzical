import { useState } from "react"
import QuestionPage from "./questionPage.jsx"

export default function StartingPage() {
  const [startQuiz, setStartQuiz] = useState(false)

  if (startQuiz) {
    return <QuestionPage />
  }


  return (   
      <div className="centered-container">
        <h1>Quizzical</h1>
        <p>Trivia Quiz App</p>
        <button onClick={()=> {setStartQuiz(true); }}  className='start-btn'>Start quiz</button>
      </div>
  )
}