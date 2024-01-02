import './App.css';

import Title from './components/Title';
import Counter from './components/Counter';
import useCountDown from './hooks/useCountDown';

import NewYear from "./assets/newyear.jpg"
function App() {
  const [day, hour, minute, second] = useCountDown("Jan 2, 2025 , 00:00:00")

  return (
    <div className='App' style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Title title="Contagem Regressiva para 2025"/>
        <div className="countdown-container">
          <Counter title={"Dias"} number={day}/>
          <Counter title={"Horas"} number={hour}/>
          <Counter title={"Minutos"} number={minute}/>
          <Counter title={"Segundos"} number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
