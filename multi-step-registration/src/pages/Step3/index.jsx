import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';

import * as C from './styles';

export const Step3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (!state.name) navigate('/');
    return dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') console.log(state);
    else window.alert('Preencha os dados corretamente.');
  };

  const handleEmailChange = (e) =>
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });

  const handleGithubChange = (e) =>
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}! Onde te achamos?</h1>
        <p>Preencha seus contatos para falarmos com você!</p>

        <hr />

        <label>
          Qual o seu e-mail?
          <input type="text" value={state.email} onChange={handleEmailChange} />
        </label>

        <label>
          Qual o seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="back-button">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
