import React, { useState, useEffect } from "react";
import FormularioTransacoes from "../components/formularioTransacoes/FormularioTransacoes";
import ListaTransacoes from "../components/listaTransacoes/ListaTransacoes";
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
    const updatedTransacoes = transacoes.filter((_, i) => i !== index);
    setTransacoes(updatedTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.content}>
        <FormularioTransacoes onAddTransacao={handleAddTransacao} />
        <ListaTransacoes
          transacoes={transacoes}
          onExcluirTransacao={handleExcluirTransacao}
        />
      </div>
    </div>
  );
};

export default Transacoes;
