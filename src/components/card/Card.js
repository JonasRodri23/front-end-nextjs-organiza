import React from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'; 

import styles from './Card.module.css';

const Card = ({ title, description, value, earnings, onRemove, onEdit }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>{title}</h2>
        <div className={styles.buttonContainer}>
          <button className={styles.editButton} onClick={onEdit}>
            <FaEdit /> 
          </button>
          <button className={styles.removeButton} onClick={onRemove}>
            <FaTimes />
          </button>
        </div>
      </div>
      <p>{description}</p>
      <p><strong>Value:</strong> {value}</p>
      <p><strong>Earnings:</strong> {earnings}</p>
    </div>
  );
};

export default Card;
