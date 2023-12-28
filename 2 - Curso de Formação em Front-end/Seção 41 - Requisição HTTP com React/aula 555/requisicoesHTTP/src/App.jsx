import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

import './App.css'

function App() {

  // 1-Resgatando dados

  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getData(){
      const res = await fetch(url)
      const data = await res.json();
      setProducts(data)
    }
    getData()
  }, []);

  return (
    <>
      <div className="App">
        <h1>HTTP em React</h1>
        {/* 1 - resgate de dados */}
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
