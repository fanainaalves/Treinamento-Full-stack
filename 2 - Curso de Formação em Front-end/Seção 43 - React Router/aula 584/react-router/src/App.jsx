import './App.css'

import {Outlet} from 'react-router-dom'

// link entre páginas
import Navbar from './components/Navbar'

// buscar
import SearchForm from './components/SearchForm'


function App() {

  return (
    <div className="app">
      <Navbar/>
      <SearchForm />
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
