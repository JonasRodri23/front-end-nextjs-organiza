import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import ExpenseForm from "../components/FormDespesa/FormDespesa";
import BudgetForm from "../components/FormOrcamento/FormOrcamento";
import styles from "../styles/Orcamento.module.css";

const BudgetPage = () => {
  const [budgets, setBudgets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(null);
  const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);

  const handleAddBudget = () => {
    setSelectedBudgetIndex(null);
    setShowModal(true);
  };

  const handleShowExpenses = (index) => {
    setSelectedBudgetIndex(index);
    setIsExpenseFormVisible((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBudgetIndex(null);
    setIsExpenseFormVisible(false);
  };

  const handleSaveBudget = (title, plannedValue) => {
    if (title && plannedValue) {
      const newBudget = {
        title,
        plannedValue: parseFloat(plannedValue),
        spentValue: 0,
        expenses: [],
      };

      setBudgets([...budgets, newBudget]);
    }
    closeModal();
  };

  const handleSaveExpense = (expenseTitle, expenseValue) => {
    if (selectedBudgetIndex !== null && expenseTitle && expenseValue) {
      const updatedBudgets = budgets.map((budget, index) =>
        index === selectedBudgetIndex
          ? {
              ...budget,
              spentValue: budget.spentValue + parseFloat(expenseValue),
              expenses: [
                ...budget.expenses,
                { title: expenseTitle, value: parseFloat(expenseValue) },
              ],
            }
          : budget
      );
      setBudgets(updatedBudgets);
    }
    closeModal();
  };

  const handleDeleteBudget = () => {
    if (selectedBudgetIndex !== null) {
      const updatedBudgets = budgets.filter((budget, index) => index !== selectedBudgetIndex);
      setBudgets(updatedBudgets);
      closeModal();
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <h1>Definição de Orçamento</h1>
        <button onClick={handleAddBudget}>Adicionar Orçamento</button>
      </div>
      <div className={styles["cards-container"]}>
        {budgets.map((budget, index) => (
          <div key={index} className={styles.card}>
            <h3
              onClick={() => handleShowExpenses(index)}
              style={{ cursor: "pointer" }}
            >
              {budget.title}
            </h3>
            <p>Valor Planejado: R$ {budget.plannedValue.toFixed(2)}</p>
            <p>Valor Gasto: R$ {budget.spentValue.toFixed(2)}</p>
            {isExpenseFormVisible && selectedBudgetIndex === index && (
              <div className={styles["modal-expense-content"]}>
                <h3>Adicionar Despesa</h3>
                <ExpenseForm onSave={handleSaveExpense} />
                {budget.expenses.length > 0 && (
                  <div>
                    <h4>Valores Gastos:</h4>
                    <ul>
                      {budget.expenses.map((expense, expenseIndex) => (
                        <li key={expenseIndex}>
                          <strong>{expense.title}:</strong> R${" "}
                          {expense.value.toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button onClick={handleDeleteBudget} style={{ color: '#fff', backgroundColor: "red", display: "flex", fontSize: "0.8vw" }}>EXCLUIR</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <Modal
              title={
                selectedBudgetIndex !== null
                  ? "Adicionar Gasto"
                  : "Adicionar Orçamento"
              }
              onClose={closeModal}
            >
              {selectedBudgetIndex !== null ? (
                <ExpenseForm onSave={handleSaveExpense} />
              ) : (
                <BudgetForm onSave={handleSaveBudget} />
              )}
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default BudgetPage;
