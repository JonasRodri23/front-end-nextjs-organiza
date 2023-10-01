import React, { useState } from 'react';
import Card from '../components/card/Card';
import styles from '../components/card/Card.module.css';

const Investimentos = () => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(''); // Novo estado para o valor
  const [earnings, setEarnings] = useState(''); // Novo estado para os rendimentos
  const [editingIndex, setEditingIndex] = useState(-1); // Estado para rastrear o card em edição

  const handleAddCard = () => {
    if (editingIndex === -1) {
      // Adicionar um novo card
      const newCard = {
        title,
        description,
        value,
        earnings,
      };

      setCards([...cards, newCard]);
    } else {
      // Atualizar um card existente
      const updatedCards = [...cards];
      updatedCards[editingIndex] = {
        title,
        description,
        value,
        earnings,
      };
      setCards(updatedCards);
      setEditingIndex(-1); // Limpar o índice de edição
    }

    // Limpar os campos após adicionar ou atualizar o card
    setTitle('');
    setDescription('');
    setValue('');
    setEarnings('');
  };

  const handleRemoveCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleEditCard = (index) => {
    // Preencher os campos de edição com os valores do card selecionado
    const selectedCard = cards[index];
    setTitle(selectedCard.title);
    setDescription(selectedCard.description);
    setValue(selectedCard.value);
    setEarnings(selectedCard.earnings);
    setEditingIndex(index);
  };

  return (
    <div className={styles.cardPage}>
      <div className={styles.cardForm}>
        {editingIndex === -1 ? (
          <>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="Earnings"
              value={earnings}
              onChange={(e) => setEarnings(e.target.value)}
            />
            <button onClick={handleAddCard}>Add Card</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Edit Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Edit Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Edit Value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="Edit Earnings"
              value={earnings}
              onChange={(e) => setEarnings(e.target.value)}
            />
            <button onClick={handleAddCard}>Update Card</button>
            <button onClick={() => setEditingIndex(-1)}>Cancel</button>
          </>
        )}
      </div>

      <div className={styles.cardList}>
        {cards.map((card, index) => (
          <div key={index}>
            <Card
              title={card.title}
              description={card.description}
              value={card.value}
              earnings={card.earnings}
              onRemove={() => handleRemoveCard(index)} // Passa a função de remoção
              onEdit={() => handleEditCard(index)} // Passa a função de edição
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investimentos;
