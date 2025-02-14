// Importando hooks do React para gerenciamento de estados
import { useState } from "react";

// Importando dados das classificações de IMC
import { data } from "./data/data";

// Importando componentes da aplicação
import ImcCalc from "../src/components/Form/form";
import ImcTable from "../src/components/Tabela/tabela";

// Importando estilos globais
import "./index.css";

// Componente principal da aplicação
function App() {
  // Estados da aplicação
  const [vImc, setImc] = useState("");        
  const [vInfo, setInfo] = useState("");      
  const [vInfoClass, setInfoClass] = useState(""); 
  const [vNome, setNome] = useState("");     

  // Função para calcular o ICM e atualizar os estados
  const calcImc = (pE, pAltura, pPeso, pNome) => { 
    pE.preventDefault();

    if (!pPeso || !pAltura) return;

    // Converte valores para float
    const vPeso_float = +pPeso.replace(",", ".");
    const vAltura_float = +pAltura.replace(",", ".");

    const vImc = (vPeso_float / (vAltura_float * vAltura_float)).toFixed(1);

    // Atualiza estados
    setImc(vImc);
    setNome(pNome); // Novo estado sendo atualizado

    // Encontra a classificação correspondente
    const info = data.find((pItem) => vImc >= pItem.min && vImc <= pItem.max);
    if (info) {
      setInfo(info.info);
      setInfoClass(info.infoClass);
    }
  };

  // Função para resetar os estados ao valor inicial
  const resetCalc = (pE) => {
    pE.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
    setNome(""); 
  };

  // Renderização do componente
  return (
    <div className="container">
      {/* Renderização condicional */}
      {vImc ? (
        // Exibe a tabela com resultados quando houver IMC calculado
        <ImcTable
          data={data}
          imc={vImc}
          info={vInfo}
          resetCalc={resetCalc}
          infoClass={vInfoClass}
          nome={vNome} 
        />
      ) : (
        // Exibe o formulário para cálculo quando não houver IMC
        <ImcCalc calcImc={calcImc} />
      )}
    </div>
  );
}

export default App;