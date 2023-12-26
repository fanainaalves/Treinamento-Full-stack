const Events = () => {

    const handleClick = () => {
        console.log("executou")
    }
    return (
        <div>
            <div>
                <button onClick={() => console.log("testando um evento")}>Clique aqui</button>
            </div>
            <div>
                <button onClick={handleClick()}>Clique aqui - Com função</button>
            </div>
        </div>
    )
}

export default Events