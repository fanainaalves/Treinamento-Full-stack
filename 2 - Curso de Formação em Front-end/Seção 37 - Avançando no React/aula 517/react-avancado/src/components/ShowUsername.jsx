const ShowUsername = (props) => {
    return (
        <div>
            <h3 style={{color:'blue'}}>Aula 511 - props do componente</h3>
            <h2>O nome do usuário é: {props.name}</h2>
        </div>
    )
}

export default ShowUsername;