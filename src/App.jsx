import { useState } from 'react'
import StartingPage from './component/startingPage'
import HomeWidget from './component/homeWidget'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <div className='right-blobcorner'></div>
      <HomeWidget />
      <StartingPage />
      <div className='left-blob-bottomcorner'></div>
    </>
  )
}

export default App
