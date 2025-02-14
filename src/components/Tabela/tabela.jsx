// Importando componentes internos
import Button from "../Button/Button";

// Importando estilos do componente
import "./tabela.css";

const ImcTable = ({ 
  data: pData, 
  imc: pImc, 
  info: pInfo, 
  resetCalc: pResetCalc, 
  infoClass: pInfoClass,
  nome: pNome 
}) => {
  // Renderização do componente
  return (
    <div id="result-container">
      {/* Exibição do nome do usuário */}
      {pNome && (
        <p id="user-name">
          Nome: <span className="user-name-text">{pNome}</span>
        </p>
      )}

      {/* Exibição do resultado do IMC */}
      <p id="imc-number">
        Seu IMC: <span className={pInfoClass}>{pImc}</span>
      </p>

      {/* Exibição da situação atual */}
      <p id="imc-info">
        Situação atual: <span className={pInfoClass}>{pInfo}</span>
      </p>

      {/* Tabela de classificações */}
      <h3>Confira as classificações</h3>
      <div id="imc-table">
        {/* Cabeçalho da tabela */}
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>

        {/* Dados da tabela */}
        {pData.map((vItem) => (
          <div className="table-data" key={vItem.info}>
            <p>{vItem.classification}</p>
            <p>{vItem.info}</p>
            <p>{vItem.obesity}</p>
          </div>
        ))}
      </div>

      {/* Botão para retornar ao cálculo */}
      <Button 
        id="back-btn" 
        text="Voltar" 
        action={(pE) => pResetCalc(pE)} 
      />
    </div>
  );
};

export default ImcTable;