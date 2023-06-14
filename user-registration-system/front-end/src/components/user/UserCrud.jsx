import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Main from '../templates/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!',
};

const baseUrl = 'http://localhost:3001/users';
const initialState = {
  user: { name: '', email: '' },
  list: [],
};

const UserCrud = () => {
  const [state, setState] = useState({ ...initialState });
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);

  const clear = () => {
    inputNameRef.current.value = '';
    inputEmailRef.current.value = '';
    setState({ ...state, user: initialState.user });
  };

  const getUpdatedList = (user) => {
    const list = state.list.filter((u) => u.id !== user.id);
    list.unshift(user);
    return list;
  };

  const updateField = () => {
    const user = { ...state.user };
    user.name = inputNameRef.current.value;
    user.email = inputEmailRef.current.value;
    return setState({ ...state, user });
  };

  const renderForm = () => (
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Nome</label>
            <input
              ref={inputNameRef}
              type="text"
              onChange={updateField}
              placeholder="Digite o nome de usuário..."
              className="form-control"
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>E-mail</label>
            <input
              ref={inputEmailRef}
              type="email"
              onChange={updateField}
              placeholder="Digite o e-mail de usuário..."
              className="form-control"
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-primary" onClick={(e) => save(e)}>
            Salvar
          </button>
          <button className="btn btn-secondary ml-6" onClick={(e) => clear(e)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );

  const save = () => {
    const user = state.user;
    const method = user.id ? 'put' : 'post';
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((res) => {
      const list = getUpdatedList(res.data);
      setState({ ...initialState, list });
    });
  };

  return <Main {...headerProps}>{renderForm()}</Main>;
};

export default UserCrud;
