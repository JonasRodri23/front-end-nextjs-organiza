// BudgetForm.js
import React, { useState } from "react";
import styles from "./FormOrcamento.module.css";

const BudgetForm = ({ onSave }) => {
  // Estados para armazenar o título e o valor planejado do orçamento
  const [title, setTitle] = useState("");
  const [plannedValue, setPlannedValue] = useState("");

  // Função para lidar com a mudança no título do orçamento
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Função para lidar com a mudança no valor planejado do orçamento
  const handlePlannedValueChange = (e) => {
    setPlannedValue(e.target.value);
  };

  // Função para lidar com o clique no botão de salvar
  const handleSave = () => {
    onSave(title, plannedValue);
  };

  return (
    <div className={styles.formOrcamento}>
      <h1>Adicionar Orçamento</h1>
      <label htmlFor="budgetTitle">Título do Orçamento:</label>
      <input
        type="text"
        id="budgetTitle"
        value={title}
        onChange={handleTitleChange}
      />
      <label htmlFor="plannedValue">Valor Planejado:</label>
      <input
        type="number"
        id="plannedValue"
        value={plannedValue}
        onChange={handlePlannedValueChange}
      />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default BudgetForm;
