// BudgetForm.js
import React, { useState } from 'react';

const BudgetForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [plannedValue, setPlannedValue] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePlannedValueChange = (e) => {
    setPlannedValue(e.target.value);
  };

  const handleSave = () => {
    onSave(title, plannedValue);
  };

  return (
    <div>
      <label htmlFor="budgetTitle">Título do Orçamento:</label>
      <input type="text" id="budgetTitle" value={title} onChange={handleTitleChange} />
      <label htmlFor="plannedValue">Valor Planejado:</label>
      <input type="number" id="plannedValue" value={plannedValue} onChange={handlePlannedValueChange} />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default BudgetForm;