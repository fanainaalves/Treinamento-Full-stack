const Events = () => {

    const handleClick = () => {
        console.log("executou")
    }

    const renderSomething =(x) => {
        if (x){
            return <h1>Renderizando isso</h1>
        } else {
            <h1>Renderizando outra coisa</h1>
        }
    }; 
    return (
        <div>
            <div>
                <button onClick={() => console.log("testando um evento")}>Clique aqui</button>
            </div>
            <div>
                <button onClick={handleClick()}>Clique aqui - Com função</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events