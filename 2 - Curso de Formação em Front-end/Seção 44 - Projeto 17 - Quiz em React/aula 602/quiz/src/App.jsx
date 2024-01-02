import { useEffect } from 'react'
import { useContext } from 'react'

import './App.css'

import { QuizContext } from './context/quiz'

import Question from './components/Question'
import PickCategory from './components/PickCategory'
import Welcome from './components/Welcome'
import GameOver from './components/GameOver'

function App() {

  const [quizState, dispatch] = useContext(QuizContext);

  // useEffect(() => { dispatch({type: "REORDER_QUESTIONS"})}, [])
  
  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
    {quizState.gameStage === "Start" && <Welcome/>}
    {quizState.gameStage === "Category" && <PickCategory/>}
    {quizState.gameStage === "Playing" && <Question/>}
    {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
