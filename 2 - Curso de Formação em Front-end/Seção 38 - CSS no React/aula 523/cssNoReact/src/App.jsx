import './App.css'
import './components/MyComponent'
import MyComponent from './components/MyComponent'
function App() {

  return (
    <>
      <div className='App'>
        {/* 1 - css no global */}
        <h1>Css no React</h1>

        {/* 2 - css de componente */}
        <MyComponent />
        <p>Pegou o css do componente</p>

        {/* 3 - Inline Style */}
        <p style={{color: 'blue', padding: "25px", borderTop: "2px solid red"}}>Este elemento tem estilo inline</p>
      </div>
    </>
  )
}

export default App
