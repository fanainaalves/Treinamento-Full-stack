import { useContext } from 'react'
import { CounterContext } from "../context/CounterContext"

const Contact = () => {
    const { counter } = useContext(CounterContext)
    return (
        <div>
            <h1>Pagina de contato</h1>
            <p>Valor do Counter: {counter}</p>
        </div>
    )
}

export default Contact