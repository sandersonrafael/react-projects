import React from 'react';
import { Theme } from '../../components/Theme';

import * as C from './styles';

export const Step1 = () => {

  const handleNextStep = () => {

  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input type="text" autoFocus />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
