// ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    onSave(title, value);
  };

  return (
    <div>
      <label htmlFor="expenseTitle">Título do Gasto:</label>
      <input type="text" id="expenseTitle" value={title} onChange={handleTitleChange} />
      <label htmlFor="expenseValue">Valor do Gasto:</label>
      <input type="number" id="expenseValue" value={value} onChange={handleValueChange} />
      <button onClick={handleSave}>Salvar</button>
    </div>
  );
};

export default ExpenseForm;