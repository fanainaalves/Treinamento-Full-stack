import { useState } from 'react'
import data from './data/data'

import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();
    if(!weight || !height) return;

    const weigthFloat = +weight.replace(",", ".")
    const heigthFloat = +height.replace(",", ".")

    const imcResult = (weigthFloat/ (heigthFloat * heigthFloat)).toFixed(1)

    setImc(imcResult)
  }
  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  return (
    <div className='container'>
      {!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data}/>}
    </div>
  )
}

export default App
