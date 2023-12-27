import './App.css'

// 2 - Importando imagem pasta Assets
import night from './assets/night.jpg'

function App() {
  return (
    <>
    <div>

      <h1>Avançando em React</h1>
      {/* 1 - Inserindo img em react - pasta Public */}
      <img src="../public/img.jpg" alt="Alguma imagem" />

      {/* 2 - Importando imagem pasta Assets*/}
      <img src={night} alt="Outra imagem" />
      
    </div>
    </>
  )
}

export default App
