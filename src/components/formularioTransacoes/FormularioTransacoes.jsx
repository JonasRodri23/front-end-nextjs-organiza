import React, { useState } from 'react';
import styles from './FormularioTransacoes.module.css';

const FormularioTransacoes = ({ onAddTransacao }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(''); 
  const [date, setDate] = useState('');

  const handleAddTransacao = (e) => {
    e.preventDefault();
    if (!descricao || !valor || !tipo || !date) return;

    const transacao = {
      descricao,
      valor: parseFloat(valor),
      tipo,
      date,
    };

    onAddTransacao(transacao);
    setDescricao('');
    setValor('');
    setTipo('');
    setDate('');
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.cardHeader}>Adicionar transação</h3>
      <div className={styles.tipoButtons}>
        <button
          type="button"
          onClick={() => setTipo('Receita')}
          className={tipo === 'Receita' ? styles.active : ''}
        >
          Receita
        </button>
        <button
          type="button"
          onClick={() => setTipo('Despesa')}
          className={tipo === 'Despesa' ? styles.active : ''}
        >
          Despesa
        </button>
      </div>
      <label className={styles.cardLabel}>
        Descrição:
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className={styles.cardInput}
        />
      </label>
      <label className={styles.cardLabel}>
        Valor:
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className={styles.cardInput}
        />
      </label>
      <label className={styles.cardLabel}>
        Data:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={styles.cardInput}
        />
      </label>
      <button
        type="submit"
        onClick={handleAddTransacao}
        className={styles.cardButton}
      >
        + Adicionar
      </button>
    </div>
  );
};

export default FormularioTransacoes;
