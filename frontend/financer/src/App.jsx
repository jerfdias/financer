import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Investimentos from "./pages/Investimentos.jsx";
import Receitas from "./pages/Receitas.jsx";
import Despesas from "./pages/Despesas.jsx";
import Cadastro_Receitas from "./pages/Cadastro_Receitas.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/despesas" element={<Despesas />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/investimentos" element={<Investimentos />} />
        <Route path="/cadastro-receitas" element={<Cadastro_Receitas/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;