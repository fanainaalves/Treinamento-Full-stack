import React from 'react'

const ConditionalRender = () => {
    const x = true;
    const name = "Matheus";

    return (
        <div>
            <h3>Isso será exibido? </h3>
            {x && <p> Se x for true, sim!</p>}

            {/* {8 - Else} */}
            <h3 style={{color:'red'}}>Render Ternário</h3>
            {name === "João" ? (
                <div>
                    <p>Olá João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender