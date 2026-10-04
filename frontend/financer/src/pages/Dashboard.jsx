import "./Dashboard.css";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2 className="logo">📊 Financer</h2>

        <nav className="menu">
     

          <Link to="/" className="menu-item">
          🏠Dashboard</Link>

          <Link to="/receitas" className="menu-item">
            💰 Receitas
          </Link>

          <Link to="/investimentos" className="menu-item">
            📈 Investimentos
          </Link>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="search-input"
          />

          <span>Olá, Jefferson!</span>
        </header>

        <section className="page-heading">
          
          <p>Visão geral das suas finanças</p>
        </section>

        <section className="summary-cards">
          <div className="summary-card">
            <h3>Receitas</h3>
            <p>R$ 0,00</p>
          </div>

          <div className="summary-card">
            <h3>Despesas</h3>
            <p>R$ 0,00</p>
          </div>

          <div className="summary-card">
            <h3>Investimentos</h3>
            <p>R$ 0,00</p>
          </div>

          <div className="summary-card">
            <h3>Patrimônio total</h3>
            <p>R$ 0,00</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;