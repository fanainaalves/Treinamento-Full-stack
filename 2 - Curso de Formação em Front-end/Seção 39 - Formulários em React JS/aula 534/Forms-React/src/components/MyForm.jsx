import { useState } from "react"
import "./MyForm.css"

const MyForm = ({username, useremail}) => {
    // 3 - Gerenciamento de Dados
    const [name,setName] = useState(username)
    const [email, setEmail] = useState(useremail)

    const handleName = (e) => {
        setName(e.target.value)
    }

    // 5 - envio de formulário 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);

    }

    console.log(name, email)
    return (
        <div>
            {/* 1 - criiação do form */}
            {/* 5 - envio de formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" placeholder="Digite o seu nome..." onChange={handleName} value={name || ""}/>
                </div>

                {/* 2 - label envolvendo o input */}
                <label>
                    <span>E-mail: </span>
                    {/* 4 - Simplificando a manipulação */}
                    <input type="text" name="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
                </label>
                <input type="submit" value={"Enviar"} />
            </form>

        </div>
    )
}

export default MyForm