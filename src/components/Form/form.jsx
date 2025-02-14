// Importando hooks do React para gerenciamento de estados
import { useState } from "react";

// Importando componentes internos
import Button from "../Button/Button";

// Importando estilos do componente
import "./form.css";

const ImcCalc = ({ calcImc }) => {
  // Estados do componente
  const [vAltura, setAltura] = useState(""); 
  const [vPeso, setPeso] = useState("");      
  const [vNome, setNome] = useState("");      

  // Função para limpar os campos do formulário
  const limparFormulario = (pE) => {
    pE.preventDefault();
    setPeso("");
    setAltura("");
    setNome(""); // Limpa o nome também
  };

  // Função para validar dígitos de entrada (atualizada para nome)
  const validarEntrada = (pTexto, pTipo) => {
    if (pTipo === 'numero') {
      return pTexto.replace(/[^0-9,]/g, "");
    }
    return pTexto.replace(/[^a-zA-ZÀ-ú\s]/g, ""); // Permite letras e espaços
  };

  // Manipuladores de mudança
  const tratarMudancaNome = (pE) => {
    const vValorAtualizado = validarEntrada(pE.target.value, 'texto');
    setNome(vValorAtualizado);
  };

  const tratarMudancaAltura = (pE) => {
    const vValorAtualizado = validarEntrada(pE.target.value, 'numero');
    setAltura(vValorAtualizado);
  };

  const tratarMudancaPeso = (pE) => {
    const vValorAtualizado = validarEntrada(pE.target.value, 'numero');
    setPeso(vValorAtualizado);
  };

  // Renderização do componente
  return (
    <div className="container">
      <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        
        {/* Formulário de cálculo */}
        <form id="imc-form">
          <div className="form-inputs">

            {/* Novo campo para nome */}
            <div className="form-control">
              <label htmlFor="name">Seu Nome:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Exemplo: João Silva"
                onChange={tratarMudancaNome}
                value={vNome}
                maxLength="50"
              />
            </div>

            {/* Campo de altura */}
            <div className="form-control">
              <label htmlFor="height">Altura (m):</label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder="Exemplo: 1,75"
                onChange={tratarMudancaAltura}
                value={vAltura}
              />
            </div>

            {/* Campo de peso */}
            <div className="form-control">
              <label htmlFor="weight">Peso (kg):</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="Exemplo: 70,5"
                onChange={tratarMudancaPeso}
                value={vPeso}
              />
            </div>
          </div>

          {/* Controles de ação */}
          <div className="action-control">
            <Button
              id="calc-btn"
              text="Calcular"
              action={(pE) => calcImc(pE, vAltura, vPeso, vNome)} 
            />
            <Button 
              id="clear-btn" 
              text="Limpar" 
              action={limparFormulario} 
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImcCalc;