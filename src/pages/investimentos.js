import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Investimentos = () => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [earnings, setEarnings] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddCard = () => {
    if (editingIndex === -1) {
      const newCard = {
        title,
        description,
        value,
        earnings,
      };
      setCards([...cards, newCard]);
    } else {
      const updatedCards = [...cards];
      updatedCards[editingIndex] = {
        title,
        description,
        value,
        earnings,
      };
      setCards(updatedCards);
      setEditingIndex(-1);
    }

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
    const selectedCard = cards[index];
    setTitle(selectedCard.title);
    setDescription(selectedCard.description);
    setValue(selectedCard.value);
    setEarnings(selectedCard.earnings);
    setEditingIndex(index);
  };

  return (
    <div style={{ padding: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Earnings"
            value={earnings}
            onChange={(e) => setEarnings(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddCard}>
            {editingIndex === -1 ? 'Add Card' : 'Update Card'}
          </Button>
          {editingIndex !== -1 && (
            <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onClick={() => setEditingIndex(-1)} style={{ marginLeft: 10 }}>
              Cancel
            </Button>
          )}
        </Grid>
      </Grid>

      <div style={{ marginTop: 20 }}>
        {cards.map((card, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <Card>
              <CardContent>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <p>Value: {card.value}</p>
                <p>Earnings: {card.earnings}</p>
                <Button variant="contained" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEditCard(index)}>
                  Edit
                </Button>
                <Button variant="contained" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveCard(index)} style={{ marginLeft: 10 }}>
                  Remove
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
