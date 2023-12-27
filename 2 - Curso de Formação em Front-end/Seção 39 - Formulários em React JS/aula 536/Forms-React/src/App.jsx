import './App.css'
import MyForm from './components/MyForm'

function App() {


  return (
    <>
      <div className='App'>
        {/* 1 - criando um formulário */}
        <h1>Criando um Formulário em React</h1>

        <MyForm username={"Matheus"} email={"matheus@horadecodar.com.br"}/>
      </div>

    </>
  )
}

export default App
