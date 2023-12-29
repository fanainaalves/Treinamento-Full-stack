import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import Contact from './routes/Contact.jsx'
import './index.css'

// 2- importando a pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'


// 1 - Configurando o router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// 3 - componente base
import Home from './routes/Home.jsx'

// 7 - rota dinamica
import Product from './routes/Product.jsx'

// 8 - nested route
import Info from './routes/Info.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 - rota dinamica
      {
        path: "products/:id",
        element: <Product />
      },
      // 8 - nested route
      {
        path: "products/:id/info",
        element: <Info />
      }
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
