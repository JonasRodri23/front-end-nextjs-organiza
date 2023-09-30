import React from "react";
import styles from "./ListaTransacoes.module.css";

const ListaTransacoes = ({ transacoes, onExcluirTransacao }) => {
  return (
    <div className={styles.listTrasancao}>
      <h2>Extrato</h2>
      <table className={`${styles.transacaoTable} ${styles.tableStyles}`}>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Data</th>
            <th>Valor</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((transacao, index) => (
            <tr
              key={index}
              className={
                transacao.tipo === "Receita"
                  ? styles.rowReceita
                  : styles.rowDespesa
              }
            >
              <td>{transacao.descricao}</td>
              <td>{transacao.tipo}</td>
              <td>{transacao.date}</td>
              <td>
                {transacao.tipo === "Despesa" ? `-R$${Math.abs(transacao.valor)}` : `R$${transacao.valor}`}
              </td>
              <td>
                <button onClick={() => onExcluirTransacao(index)} className={styles.buttonDelete}>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaTransacoes;
