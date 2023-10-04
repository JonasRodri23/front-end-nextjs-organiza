// pages/ButtonPage.js
import React, { useState, useEffect } from 'react';
import styles from '../styles/Investimentos.module.css'
import Link from "next/link";

const ButtonPage = () => {
  const [buttonStates, setButtonStates] = useState([false, false, false, false, false, false, false]);

  const buttonMessages = [
    'Notificações de Transação',
    'Alertas de Saldo',
    'Notificações de Pagamentos Programados',
    'Notificações de Ofertas e Promoções',
    'Lembretes de Vencimento de Cartão de Crédito',
    'Notificações de Transferências Recebidas',
    'Atualizações de Aplicativo',
  ];

  useEffect(() => {
    // Ao montar o componente, tenta carregar o estado dos botões do LocalStorage
    const savedButtonStates = localStorage.getItem('buttonStates');
    if (savedButtonStates) {
      setButtonStates(JSON.parse(savedButtonStates));
    }
  }, []);

  const handleButtonClick = (buttonNumber) => {
    const updatedStates = [...buttonStates];
    updatedStates[buttonNumber] = !updatedStates[buttonNumber];
    setButtonStates(updatedStates);

    // Ao clicar no botão, salva o estado atual dos botões no LocalStorage
    localStorage.setItem('buttonStates', JSON.stringify(updatedStates));
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <Link href="/dashboard">
        <button className={styles.backButton}>Voltar ao Dashboard</button>
      </Link>
      <h1 className="text-2xl font-semibold mb-4 text-center bg-violet-900 text-white py-2 w-full">
        Notificações
      </h1>
      <div className="text-center">
        <ul>
          {buttonMessages.map((message, index) => (
            <li key={index} className="flex items-center mb-2">
              <button
                className={`border px-4 py-2 m-2 ${buttonStates[index] ? 'bg-green-500 transform scale-105' : 'bg-red-500 text-white'
                  }`}
                onClick={() => handleButtonClick(index)}
                style={{ borderRadius: '10px' }}
              >
                {buttonStates[index] ? 'Desativar' : 'Ativar'} {/* Altera o texto do botão */}
              </button>
              <div className="ml-2">{message}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ButtonPage;
