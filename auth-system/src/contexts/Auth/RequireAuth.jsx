import { useContext } from 'react';
import PropTypes from 'prop-types';

import AuthContext from './AuthContext';
import Login from '../../pages/Login';

export default function RequireAuth ({ children }) {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};