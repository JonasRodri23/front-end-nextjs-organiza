import React from 'react';
import Styles from './Modal.module.css'

const Modal = ({ title, onClose, children }) => {
  return (
    <div className={Styles.modal}>
      <div className={Styles.modal_content}>
        <span className={Styles.close} onClick={onClose}>
          &times;
        </span>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
