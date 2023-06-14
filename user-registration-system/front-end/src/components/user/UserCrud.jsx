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

  useEffect(() => {
    axios(baseUrl).then((res) => {
      setState({ ...state, list: res.data });
    });
  }, []); // eslint-disable-line

  const clear = () => {
    inputNameRef.current.value = '';
    inputEmailRef.current.value = '';
    setState({ ...state, user: initialState.user });
  };

  const getUpdatedList = (user, add = true) => {
    const list = state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  };

  const updateField = () => {
    const user = { ...state.user };
    user.name = inputNameRef.current.value;
    user.email = inputEmailRef.current.value;
    console.log(state.list);
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
        <div className="col-12 d-flex justify-content-end gap-2">
          <button className="btn btn-primary" onClick={(e) => save(e)}>
            Salvar
          </button>
          <button className="btn btn-secondary" onClick={(e) => clear(e)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );

  const save = () => {
    const user = state.user;

    if (!user.name || !user.email) return;

    const method = user.id ? 'put' : 'post';
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((res) => {
      const list = getUpdatedList(res.data);
      setState({ ...initialState, list });
    });

    inputNameRef.current.value = '';
    inputEmailRef.current.value = '';
  };

  const load = (user) => {
    setState({ ...state, user });
    inputNameRef.current.value = user.name;
    inputEmailRef.current.value = user.email;
  };

  const remove = (user) => {
    axios.delete(`${baseUrl}/${user.id}`).then((res) => {
      const list = getUpdatedList(user, false);
      setState({ ...state, list });
    });
  };

  const renderRows = () => {
    return state.list.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td className="d-flex gap-2">
            <button className="btn btn-warning" onClick={() => load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger" onClick={() => remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  const renderTable = () => (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );

  return (
    <Main {...headerProps}>
      {renderForm()}
      {renderTable()}
    </Main>
  );
};

export default UserCrud;
