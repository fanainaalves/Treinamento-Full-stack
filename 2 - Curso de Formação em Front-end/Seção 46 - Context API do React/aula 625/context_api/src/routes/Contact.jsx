import { useContext } from 'react'
import { CounterContext } from "../context/CounterContext"

import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Contact = () => {
    const { counter } = useContext(CounterContext)

    const { color } = useTitleColorContext()

    return (
        <div>
            <h1 style={{color: color}}>Pagina de contato</h1>
            <p>Valor do Counter: {counter}</p>
        </div>
    )
}

export default Contact