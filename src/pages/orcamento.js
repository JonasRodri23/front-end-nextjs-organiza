import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import ExpenseForm from "../components/FormDespesa/FormDespesa";
import BudgetForm from "../components/FormOrcamento/FormOrcamento";
import styles from "../styles/Orcamento.module.css";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

const BudgetPage = () => {
   // Estados para armazenar os orçamentos e controle de exibição de modais
  const [budgets, setBudgets] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBudgetIndex, setSelectedBudgetIndex] = useState(null);
  const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);

   // Carrega os orçamentos do armazenamento local ao inicializar
   useEffect(() => {
    const storedBudgets = JSON.parse(localStorage.getItem("budgets")) || [];
    setBudgets(storedBudgets);
  }, []);

  // Função para adicionar um novo orçamento
  const handleAddBudget = () => {
    setSelectedBudgetIndex(null);
    setShowModal(true);
  };

 // Função para mostrar as despesas de um orçamento
  const handleShowExpenses = (index) => {
    setSelectedBudgetIndex(index);
    setIsExpenseFormVisible((prev) => !prev);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedBudgetIndex(null);
    setIsExpenseFormVisible(false);
  };

  // Função para salvar um novo orçamento
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

   // Função para salvar uma nova despesa
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

 // Função para excluir um orçamento
  const handleDeleteBudget = () => {
    if (selectedBudgetIndex !== null) {
      const updatedBudgets = budgets.filter(
        (budget, index) => index !== selectedBudgetIndex
      );
      setBudgets(updatedBudgets);
      closeModal();
    }
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.header}>
        <Link href="/dashboard">
          <button className={styles.backButton}>Voltar ao Dashboard</button>
        </Link>
        <h1>Definição de Orçamento</h1>
        <button className={styles.addOrcamento} onClick={handleAddBudget}>
          Adicionar Orçamento
        </button>
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
                <button
                  onClick={handleDeleteBudget}
                  style={{
                    color: "#fff",
                    backgroundColor: "red",
                    display: "flex",
                    fontSize: "0.8vw",
                  }}
                >
                  EXCLUIR
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <Modal onClose={closeModal}>
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
