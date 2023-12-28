import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import PreviewForm from './components/PreviewForm'
import Thanks from './components/Thanks'

// Hook
import { useForm } from './components/hooks/UseForm'

function App() {

  const formsComponents = [<UserForm />, <PreviewForm />, <Thanks />]

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formsComponents)
  return (
    <div className="app">
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="fomr-container">
        <p>Etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>

          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            <button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            {!isFirstStep}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}

          </div>
        </form>
      </div>
    </div>
  )
}

export default App
