import "./ImcCalc.css";

const ImcCalc = () => {
    return <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura: </label>
                    <input type="text" id="height" name="height" placeholder="Exemplo 1,75"/>
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso: </label>
                    <input type="text" id="weight" name="weight" placeholder="Exemplo 70,5"/>
                </div>
            </div>
            <div className="action-control">
                <button>Calcular</button>
                <button>Limpar</button>
            </div>
        </form>
    </div>
    }

export default ImcCalc