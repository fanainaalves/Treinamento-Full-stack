import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './routes/Contact.jsx'
import './index.css'

import { createBrouserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrouserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "contact",
    element: <Contact />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
