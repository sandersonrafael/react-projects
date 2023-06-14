import { useState, useEffect } from 'react';
import axios from 'axios';

import Main from '../templates/Main';

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!',
};

const UserCrud = () => {
  return <Main {...headerProps}>Cadastro de Usuário</Main>;
};

export default UserCrud;
