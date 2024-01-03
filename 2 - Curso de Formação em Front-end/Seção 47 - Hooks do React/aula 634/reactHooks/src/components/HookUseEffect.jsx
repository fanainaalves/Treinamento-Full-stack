import { useEffect, useState } from 'react'

const HookUseEffect = () => {
    useEffect(() => {
        console.log("Estou sendo executado")
    });

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }

    useEffect(() => {
        console.log("Serei executado apenas uma vez")
    }, [])

    const [anotherNumber, setAnotherNumber] = useState(0)
    useEffect(() => {
        if(anotherNumber > 0) {
            console.log("Soou executado apenas quando muudar o anotherNumber")
        }
    }, [anotherNumber])







    return (
        <div>
            <h2>UseEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar o anotherNumber</button>
        </div>
    )
}

export default HookUseEffect