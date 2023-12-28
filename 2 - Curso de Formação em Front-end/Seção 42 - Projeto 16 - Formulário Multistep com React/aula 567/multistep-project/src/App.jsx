import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import UserForm from './components/UserForm'
import PreviewForm from './components/PreviewForm'
import Thanks from './components/Thanks'


// Hook
import UseForm, { useForm } from './components/hooks/UseForm'
function App() {

  const formsComponents = [<UserForm />, <PreviewForm />, <Thanks />]

  const { currentStep, currentComponent} = useForm(formsComponents)
  return (
    <div className="app">
      <div className="header">
        <h2>Deixe a sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="fomr-container">
        <p>Etapas</p>
        <form>

          <div className="inputs-container">
            {currentComponent}
          </div>

          <div className="actions">
            <button type='button'>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>

            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default App
