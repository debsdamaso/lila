import React from 'react';
import styles from '../CSS/StartButton.module.css';

const StartButton = () => {
  return (
    <div className={styles['start-button']}>
      <button>Começar</button>
    </div>
  );
};

export default StartButton;