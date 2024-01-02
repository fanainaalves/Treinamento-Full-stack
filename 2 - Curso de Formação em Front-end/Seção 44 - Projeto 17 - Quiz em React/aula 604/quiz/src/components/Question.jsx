import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Question.css'

import Option from './Option';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    
    const currentQuestions = quizState.questions[quizState.currentQuestions]

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestions.answer, option}
        })
    }
    
    return (
        <div id='question'>
            <p>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestions.question}</h2>
            <div id='options-container'>
                {currentQuestions.options.map((option) => (
                    <Option 
                    option={option} 
                    key={option} 
                    answer={currentQuestions.answer} 
                    selectOption={() => onSelectOption(option)}
                    hide = {quizState.optionToHide === option ? "hide" : null}
                    />
                ))}
            </div>

            {!quizState.answerSelected && !quizState.help && (
                <>
                    {currentQuestions.tip && (
                        <button onClick={() => dispatch({type: "SHOW_TIP"})}>Dica</button>
                    )}
                    <button onClick={() => dispatch({type: "REMOVE_OPTION"})}>Excluir uma</button>
                </>
            )}

            {!quizState.answerSelected && quizState.help === "tip" && (
                <p>{currentQuestions.tip}</p>
            )}

            {quizState.answerSelected && (
                <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>Continuar</button>
            )}
            
        </div>
    )
}

export default Question