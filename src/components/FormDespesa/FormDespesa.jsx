// ExpenseForm.js
import React, { useState } from "react";

const ExpenseForm = ({ onSave }) => {
  // Estados para armazenar o título e o valor da despesa
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  // Função para lidar com a mudança no título da despesa
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Função para lidar com a mudança no valor da despesa
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  // Função para lidar com o clique no botão de salvar
  const handleSave = () => {
    onSave(title, value);
  };

  return (
    <div>
      <label htmlFor="expenseTitle">Título do Gasto:</label>
      <input
        type="text"
        id="expenseTitle"
        value={title}
        onChange={handleTitleChange}
      />
      <label htmlFor="expenseValue">Valor do Gasto:</label>
      <input
        type="number"
        id="expenseValue"
        value={value}
        onChange={handleValueChange}
      />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default ExpenseForm;
