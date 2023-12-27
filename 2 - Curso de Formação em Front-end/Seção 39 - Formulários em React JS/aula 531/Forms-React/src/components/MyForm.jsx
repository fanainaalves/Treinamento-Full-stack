import { useState } from "react"
import "./MyForm.css"

const MyForm = () => {
    // 3 - Gerenciamento de Dados
    const [name,setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            {/* 1 - criiação do form */}
            <form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite o seu nome..." onChange={handleName}/>
                </div>

                {/* 2 - label envolvendo o input */}
                <label>
                    <span>E-mail: </span>
                    <input type="text" name="email" placeholder="Digite seu e-mail..." />
                </label>
                <input type="submit" value={"Enviar"} />
            </form>

        </div>
    )
}

export default MyForm