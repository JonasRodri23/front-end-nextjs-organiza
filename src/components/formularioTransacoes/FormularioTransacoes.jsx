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
    <form onSubmit={handleAddTransacao} className={styles.formTransacao}>
      <h3>Adicionar transação</h3>
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
      <label>
        Descrição:
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </label>
      <label>
        Valor:
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </label>
      <label>
        Data:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button type="submit"className={styles.botaoAdd}>+ Adicionar</button>
    </form>
  );
};

export default FormularioTransacoes;
