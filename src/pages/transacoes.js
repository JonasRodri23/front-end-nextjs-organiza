import React, { useState, useEffect } from "react";
import FormularioTransacoes from "../components/formularioTransacoes/FormularioTransacoes";
import ListaTransacoes from "../components/listaTransacoes/ListaTransacoes";
import GraficoTransacoes from "@/components/graficoTransacoes/GraficoTransacoes";

import styles from "../styles/Transacoes.module.css";
import Head from "next/head";

const Transacoes = () => {
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    const storedTransacoes =
      JSON.parse(localStorage.getItem("transacoes")) || [];
    setTransacoes(storedTransacoes);
  }, []);

  const handleAddTransacao = (transacao) => {
    const updatedTransacoes = [...transacoes, transacao];
    setTransacoes(updatedTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
  };

  const handleExcluirTransacao = (index) => {
    const updatedTransacoes = [...transacoes];
    updatedTransacoes.splice(index, 1);
    setTransacoes(updatedTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
  };

  return (
    <div className={styles.body}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.formTransacao}>
        <FormularioTransacoes onAddTransacao={handleAddTransacao} />
      </div>
      <div>
        <ListaTransacoes
          transacoes={transacoes}
          onExcluirTransacao={handleExcluirTransacao} // Passa a função para excluir transação
        />
      </div>
      {/* <div className={styles.chart}>
      <GraficoTransacoes transacoes={transacoes} />
      </div> */}
    </div>
  );
};

export default Transacoes;
