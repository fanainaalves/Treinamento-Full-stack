// import { useContext } from 'react'
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from '../components/ChangeCounter'

import { useCounterContext } from '../hooks/useCounterContext'

const Home = () => {
    // const { counter } = useContext(CounterContext)

    const {counter} = useCounterContext()
    return (
        <div>
            <h1>Home</h1>
            <p>Valor do Contador: {counter}</p>
            <ChangeCounter/>
        </div>
    )
}

export default Home