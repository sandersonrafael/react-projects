// Context, Reducer, Provider, Hook
import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

// Context -> cria um contexto do próprio React, para acessar valores em camadas baixas de componentes
const FormContext = createContext();

// Reducer -> um só objeto gerencia vários estados (simulando "enum")
export const FormActions = {
  setCurrentStep: 'setCurrentStep',
  setName: 'setName',
  setLevel: 'setLevel',
  setEmail: 'setEmail',
  setGithub: 'setGithub'
};

// informa o state geral e a action (qual estado deseja alterar e como irá alterar);
// a action recebe um objeto com { type: tal, payload: tal }; type é qual o "setState" se deseja usar e
// payload é a função do "setState", que atualiza o valor de determinado estado entre os existentes

const formReducer = (state, action) => {
  switch(action.type) {
  case FormActions.setCurrentStep:
    return { ...state, currentStep: action.payload };

  case FormActions.setName:
    return { ...state, name: action.payload };

  case FormActions.setLevel:
    return { ...state, level: action.payload };

  case FormActions.setEmail:
    return { ...state, email: action.payload };

  case FormActions.setGithub:
    return { ...state, github: action.payload };

  default:
    return state;
  }
};

// valores iniciais dos estados
const initialData = {
  currentStep: 0,
  name: '',
  level: 0,
  email: '',
  github: ''
};

// Provider
export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.any
}.isRequired;

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm precisa ser usado dentro do FormProvider');
  }

  return context;
};
