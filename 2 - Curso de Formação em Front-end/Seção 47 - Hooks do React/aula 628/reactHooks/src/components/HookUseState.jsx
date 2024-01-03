import { useState } from 'react'

const HookUseState = () => {
    let userName = "João"
    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = "João da Silva";
        setName("Matheus Batisti")
    }
    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar de Nomes</button>
        </div>
    )
}

export default HookUseState