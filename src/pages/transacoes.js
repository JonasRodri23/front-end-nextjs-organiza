import React, { useState, useEffect } from "react";
import FormularioTransacoes from "../components/FormularioTransacoes/FormularioTransacoes";
import ListaTransacoes from "../components/ListaTransacoes/ListaTransacoes";
import styles from "../styles/Transacoes.module.css";
import Head from "next/head";
import Link from "next/link";

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
      <Link href="/dashboard">
        <button className={styles.backButton}>Voltar ao Dashboard</button>
      </Link>
      <div className={styles.content}>
        <FormularioTransacoes onAddTransacao={handleAddTransacao} />
        <ListaTransacoes
          transacoes={transacoes}
          onExcluirTransacao={handleExcluirTransacao}
        />
       {/*  <GraficoTransacoes transacoes={transacoes} /> */}
      </div>
    </div>
  );
};

export default Transacoes;
