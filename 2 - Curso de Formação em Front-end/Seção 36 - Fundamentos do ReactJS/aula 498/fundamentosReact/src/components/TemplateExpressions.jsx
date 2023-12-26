// aula 495 - Template Expressions

const TemplateExpression = () => {

    const name = "Matheus"
    const data = {
        age: 31,
        job: "Programador"
    }
    return (
        <div>
            <p>a Soma é {2 + 3}</p>
            <h3>Bem vindo {name}</h3>
            <p>Sua idade  é: {data.age}, e sua profissão é: {data.job}</p>
        </div>
    )
}

export default TemplateExpression