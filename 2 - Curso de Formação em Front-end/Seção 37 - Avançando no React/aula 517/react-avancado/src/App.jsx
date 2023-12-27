import './App.css'
import CarDetails from './components/CarDetails'
import ConditionalRender from './components/ConditionalRender'
import ExecuteFunction from './components/ExecuteFunction'
import Fragment from './components/Fragment'

// 2 - Importando imagem pasta Assets
//import night from './assets/night.jpg'

// 3 - Importando o UseState
// import Data from './components/Data'
// import ListRender from './components/ListRender'
import ShowUsername from './components/ShowUsername'


// aula 514
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 320000},
]
function App() {  
  function showMessage(){
    console.log("Evento do componente pai")
  }
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
      <CarDetails brand = "VW" km={999} color="Vermelho" />
      {/* Aula 513 */}
      <CarDetails brand = "Fiat" km={2999} color="Branco" />
      <CarDetails brand = "Audi" km={1} color="Azul" />
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}

      <Fragment/>

      <ExecuteFunction myFunction={showMessage()}/>
    </div>
    </>
  )
}

export default App
