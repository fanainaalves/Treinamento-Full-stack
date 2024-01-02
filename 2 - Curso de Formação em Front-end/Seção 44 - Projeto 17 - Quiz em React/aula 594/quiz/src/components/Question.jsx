import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Question.css'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestions = quizState.questions[quizState.currentQuestions]

    console.log(quizState)
    return (
        <div id='question'>
            <p>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestions.question}</h2>
            <div id='options-container'>
                <p>Opções</p>
            </div>
            <button>Continuar</button>
        </div>
    )
}

export default Question