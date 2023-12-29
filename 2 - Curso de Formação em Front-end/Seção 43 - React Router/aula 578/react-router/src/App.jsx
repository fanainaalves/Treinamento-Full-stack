import { useState } from 'react'
import './App.css'

import {Outlet} from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <p>Navbar</p>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
