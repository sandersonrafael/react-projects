import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const Step1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    return dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, []);

  const handleNextStep = () => {
    if (state.name.length > 2) navigate('/step2');
    else window.alert('Informe um nome válido.');
  };

  const handleNameChange = (e) => dispatch({
    type: FormActions.setName,
    payload: e.target.value
  });

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange} />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
