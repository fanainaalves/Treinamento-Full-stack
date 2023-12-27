import './App.css'
import './components/MyComponent'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  // 4 - css dinamico
  const n = 15

  // 5 - Classes dinâmicas
  const redTitle = true;

  return (
    <>
      <div className='App'>
        {/* 1 - css no global */}
        <h1>Css no React</h1>

        {/* 2 - css de componente */}
        <MyComponent />
        <p>Pegou o css do componente</p>

        {/* 3 - Inline Style */}
        <p style={{ color: 'blue', padding: "25px", borderTop: "2px solid red" }}>Este elemento tem estilo inline</p>

        {/* 4 - Inline Style Dinâmico */}
        <h2 style={n > 10 ? { color: 'purple' } : { color: 'magenta' }}>CSS Dinâmico</h2>
        <h2 style={n > 20 ? { color: 'purple' } : { color: 'magenta' }}>CSS Dinâmico</h2>

        {/* 5 - Classes Dinâmicas */}
        <h2 className={redTitle ? 'red-title' : "title"}>Este Título vai receber uma classe</h2>

        {/* 6 - css modules */}
        <Title />
      </div>
    </>
  )
}

export default App
