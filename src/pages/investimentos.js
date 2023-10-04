import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import styles from '../styles/Investimentos.module.css'
import Link from "next/link";
import Head from "next/head";


const Investimentos = () => {
  const [cards, setCards] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [ganhos, setGanhos] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddCard = () => {
    if (editingIndex === -1) {
      const newCard = {
        titulo,
        descricao,
        valor,
        ganhos,
      };
      setCards([...cards, newCard]);
    } else {
      const updatedCards = [...cards];
      updatedCards[editingIndex] = {
        titulo,
        descricao,
        valor,
        ganhos,
      };
      setCards(updatedCards);
      setEditingIndex(-1);
    }

    setTitulo('');
    setDescricao('');
    setValor('');
    setGanhos('');
  };

  const handleRemoveCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleEditCard = (index) => {
    const selectedCard = cards[index];
    setTitulo(selectedCard.titulo);
    setDescricao(selectedCard.descricao);
    setValor(selectedCard.valor);
    setGanhos(selectedCard.ganhos);
    setEditingIndex(index);
  };

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="/dashboard">
        <button className={styles.backButton}>Voltar ao Dashboard</button>
      </Link>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>Investimentos</h2>
          <label>Titulo:</label>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            variant="outlined"
            className={styles.inputField}
          />
          <label>Descrição:</label>
          <input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            variant="outlined"
            className={styles.inputField}
          />
          <label>Valor:</label>
          <input
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            variant="outlined"
            className={styles.inputField}
          />
          <label>Ganhos:</label>
          <input
            value={ganhos}
            onChange={(e) => setGanhos(e.target.value)}
            variant="outlined"
            className={styles.inputField}
          />
          <Button
            variant="contained"
            className={styles.buttonPrimary}
            onClick={handleAddCard}
            style={{
              backgroundColor: "#272545",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              marginTop: "10px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px"
            }}
          >
            {editingIndex === -1 ? 'Adicionar Investimentos' : 'Editar Investimento'}
          </Button>
          {editingIndex !== -1 && (
            <Button
              onClick={() => setEditingIndex(-1)}
              style={{
                backgroundColor: "#d40000",
                color: "white",
                fontWeight: "bold",
                padding: "10px",
                marginTop: "10px",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px"
              }}
            >
              Cancelar
            </Button>
          )}
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <Card>
              <CardContent>
                <h2>{card.titulo}</h2>
                <p>{card.descricao}</p>
                <p>Valor: {card.valor}</p>
                <p>Ganhos: {card.ganhos}</p>
                <Button
                  variant="contained"
                  className={styles.buttonEdit}
                  onClick={() => handleEditCard(index)}
                  style={{
                    backgroundColor: "#272545",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.8vw",
                    padding: "5px",
                    marginTop: "10px",
                    marginRight: "10px",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  className={styles.buttonDelete}
                  onClick={() => handleRemoveCard(index)}
                  style={{
                    backgroundColor: "#d40000",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "0.8vw",
                    padding: "5px",
                    marginTop: "10px",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                  }}
                >
                  Remover
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investimentos;
