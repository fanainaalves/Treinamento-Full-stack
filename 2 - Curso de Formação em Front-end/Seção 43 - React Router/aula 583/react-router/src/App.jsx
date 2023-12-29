import './App.css'

import {Outlet} from 'react-router-dom'

// link entre páginas
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
