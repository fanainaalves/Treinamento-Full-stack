import './App.css'
import './components/FirstComponent'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'

function App() {
  return (
      <div className='App'>
        <h1>Fundamentos do React.JS</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponent/>
      </div>
  )
}

export default App
