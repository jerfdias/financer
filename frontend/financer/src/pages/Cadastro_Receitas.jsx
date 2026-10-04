import { Link } from "react-router-dom";
import "./cadastro-receitas.css";

function Cadastro_Receitas() {
  return (
    <div className="cadastro-page">
      <div className="cadastro-header">
        <div>
          <h1>Nova Receita</h1>
          <p>Cadastre uma nova entrada de dinheiro</p>
        </div>

        <Link to="/receitas" className="btn-voltar">
          Voltar
        </Link>
      </div>

      <form className="receita-form">
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            placeholder="Ex.: Salário mensal"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" name="categoria" required defaultValue="">
            <option value="" disabled>
              Selecione uma categoria
            </option>
            <option value="Salário">Salário</option>
            <option value="INSS">INSS</option>
            <option value="Investimentos">Investimentos</option>
            <option value="Outras">Outras receitas</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="valor">Valor (R$)</label>
          <input
            type="number"
            id="valor"
            name="valor"
            placeholder="0,00"
            min="0.01"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="data">Data do recebimento</label>
          <input
            type="date"
            id="data"
            name="data"
            required
          />
        </div>

        <div className="form-actions">
          <Link to="/receitas" className="btn-cancelar">
            Cancelar
          </Link>

          <button type="submit" className="btn-salvar">
            Salvar receita
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro_Receitas;