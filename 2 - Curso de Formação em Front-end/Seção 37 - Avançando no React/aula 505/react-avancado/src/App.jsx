import './App.css'

// 2 - Importando imagem pasta Assets
import night from './assets/night.jpg'

// 3 - Importando o UseState
import Data from './components/Data'

function App() {
  return (
    <>
    <div className='App' style={{paddingBottom: "500px"}}>

      <h1>Avançando em React</h1>
      {/* 1 - Inserindo img em react - pasta Public */}
      <img src="../public/img.jpg" alt="Alguma imagem" />

      {/* 2 - Importando imagem pasta Assets*/}
      <img src={night} alt="Outra imagem" />
      
      {/* 3 - useState*/}
      <Data />
    </div>
    </>
  )
}

export default App
