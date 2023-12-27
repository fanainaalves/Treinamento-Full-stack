import { useState } from "react";

const Data = () => {
    let someData = 10;
    const [anotherNuber, setAnotherNumber]= useState(15);

    return(
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => (someData = 15)}>Mudar Variável</button>
            </div>
            <div>
                <p>Valor: {anotherNuber}</p>
                <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
            </div>
        </div>
    )
}

export default Data;