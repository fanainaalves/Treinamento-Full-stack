import './App.css'
import ConditionalRender from './components/ConditionalRender'

// 2 - Importando imagem pasta Assets
//import night from './assets/night.jpg'

// 3 - Importando o UseState
// import Data from './components/Data'
// import ListRender from './components/ListRender'
import ShowUsername from './components/ShowUsername'

function App() {
  return (
    <>
    <div className='App' style={{paddingBottom: "500px"}}>

      <h1>Avançando em React</h1>
      {/* 1 - Inserindo img em react - pasta Public */}
      {/* <img src="../public/img.jpg" alt="Alguma imagem" />

      {/* 2 - Importando imagem pasta Assets*/}
     {/* <img src={night} alt="Outra imagem" /> */}
      
      {/* 3 - useState*/}
      {/* <Data /> */}

      {/* 4 - Render de Lista */}
      {/* <ListRender/> */}
      <ConditionalRender/>
      <ShowUsername name="Matheus"/>
    </div>
    </>
  )
}

export default App
