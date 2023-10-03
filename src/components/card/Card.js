import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

import styles from "./Card.module.css";

const Card = ({ titulo, descricao, valor, ganhos, onRemove, onEdit }) => {
  return (
    <div className={styles.cardsConteiner}>
      <div className={styles.cardHeader}>
        <h2>{titulo}</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.editButton} onClick={onEdit}>
            <FaEdit />
          </button>
          <button className={styles.removeButton} onClick={onRemove}>
            <FaTimes />
          </button>
        </div>
      </div>
      <p>{descricao}</p>
      <p>
        <strong>Valor:</strong> {valor}
      </p>
      <p>
        <strong>Ganhos:</strong> {ganhos}
      </p>
    </div>
  );
};

export default Card;
