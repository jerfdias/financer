import "./receitas.css"
import { Link } from "react-router";
function Receitas() {
  return (
    <div className="receitas-page">
      <h1>Receitas</h1>
      <p>Controle das suas entradas de dinheiro</p>

      <div className="receitas-cards">
        <div className="receita-card">
          <h3>Receita Total</h3>
          <p>R$ 0,00</p>
        </div>

        <div className="receita-card">
          <h3>Salário</h3>
          <p>R$ 0,00</p>
        </div>

        <div className="receita-card">
          <h3>INSS</h3>
          <p>R$ 0,00</p>
        </div>

        <div className="receita-card">
          <h3>Outras Receitas</h3>
          <p>R$ 0,00</p>
        </div>
        <div className="receita-card">

          <Link to="/cadastro-receitas"><h2>+ Add Receita</h2></Link>
        </div>
      </div>
    </div>
  );
}

export default Receitas;