import React from 'react';
import styles from '../CSS/TextArea.module.css';

const TextArea = () => {
  return (
    <div className={styles['text-area']}>
      <h2>
        Agora vamos iniciar a etapa de validação dos documentos. <br></br>
        Para isso verifique a iluminação do local e a nitidez da foto que sera enviada. <br></br>
        Dica: posicione o documento dentro da área quadriculada. <br></br>
      </h2>
    </div>
  );
};

export default TextArea;