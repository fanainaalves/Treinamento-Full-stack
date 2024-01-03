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

    return (
        <div>
            <h2>UseEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
        </div>
    )
}

export default HookUseEffect