import React, { useState, useEffect } from "react";
import FormularioTransacoes from "../components/formularioTransacoes/FormularioTransacoes";
import ListaTransacoes from "../components/listaTransacoes/ListaTransacoes";


import styles from "../styles/Receita.module.css";

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

  return (
    <div className={styles.body}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    <div className={styles.formTransacao}>
        <FormularioTransacoes onAddTransacao={handleAddTransacao} />
    </div>
    <div  className={styles.listTransacao}>
      <ListaTransacoes transacoes={transacoes} />
    </div>
    </div>
  );
};

export default Transacoes;
