import React, { useState, useEffect } from "react";
import FormularioTransacoes from "../components/formularioTransacoes/FormularioTransacoes";
import ListaTransacoes from "../components/listaTransacoes/ListaTransacoes";
import styles from "../styles/Transacoes.module.css";
import Head from "next/head";
import Link from "next/link";

const Transacoes = () => {
  // Estado para armazenar as transações
  const [transacoes, setTransacoes] = useState([]);

  // Carrega as transações do armazenamento local ao inicializar
  useEffect(() => {
    const storedTransacoes =
      JSON.parse(localStorage.getItem("transacoes")) || [];
    setTransacoes(storedTransacoes);
  }, []);

  // Função para adicionar uma transação
  const handleAddTransacao = (transacao) => {
    const updatedTransacoes = [...transacoes, transacao];
    setTransacoes(updatedTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
  };

 // Função para excluir uma transação
  const handleExcluirTransacao = (index) => {
    const updatedTransacoes = transacoes.filter((_, i) => i !== index);
    setTransacoes(updatedTransacoes);
    localStorage.setItem("transacoes", JSON.stringify(updatedTransacoes));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Transações</title>
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
      </div>
    </div>
  );
};

export default Transacoes;
