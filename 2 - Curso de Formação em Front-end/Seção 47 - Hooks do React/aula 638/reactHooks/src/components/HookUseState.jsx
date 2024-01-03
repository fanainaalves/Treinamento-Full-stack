import { useState } from 'react'

const HookUseState = () => {
    let userName = "João"
    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = "João da Silva";
        setName("Matheus Batisti")
    }

    const handleSubmit = (e) => {
        e.preventDefalt();

        console.log(age)
    }

    const [age, setAge] = useState(18)
    return (
        <div>
            <h2>useState</h2>
            <p>Variável: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar de Nomes</button>
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
                <input type="submit" value={"Enviar"} />
            </form>
            <p>Você tem {age} anos.</p>
            <hr />
        </div>
    )
}

export default HookUseState