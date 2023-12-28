import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

import './App.css'

import { useFetch } from './hooks/useFetch'

function App() {

  // 1-Resgatando dados

  const [products, setProducts] = useState([])

  // 4 - custom rook
  const {data: items, httpConfig, loading} = useFetch(url)

  // useEffect(() => {
  //   async function getData(){
  //     const res = await fetch(url)
  //     const data = await res.json();
  //     setProducts(data)
  //   }
  //   getData()
  // }, []);

  // 2 - enviando os dados
  const [ name, setName] = useState("")
  const [ price, setPrice] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, 
      price
    }

    // 5 - refatorando post
    httpConfig(product, "POST")
    

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // })

    // // 3 - Carregamento dinamico
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
  }


  return (
    <>
      <div className="App">
        <h1>HTTP em React</h1>
        
        {/* 6 - Loading */}
        {loading && <p>Carregando...</p>}

        {/* 1 - resgate de dados */}
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>

        {/* 2 - enviando os dados */}

        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome</span>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              <span>Preço</span>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {/* <input type="submit" value={"Enviar"}/> */}
            {/* 7 - Loading Post */}
            {loading && <input type="submit" disabled value="Aguarde"/>}
            {!loading && <input type="submit" value="Criar"/>}
          </form>
        </div>
      </div>
    </>
  )
}

export default App
