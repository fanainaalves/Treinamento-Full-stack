import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import { CounterContextProvide } from './context/CounterContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvide>
      <RouterProvider router={router} />
    </CounterContextProvide>
  </React.StrictMode>
)
