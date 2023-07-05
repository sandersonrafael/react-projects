import PropTypes from 'prop-types';

import AuthContext from './AuthContext';
import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const authToken = localStorage.getItem('authToken');

      if (authToken) {
        const data = await api.validateToken(authToken);

        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, []);

  const signin = async (email, password) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
    return setToken('');
  };

  const setToken = (token) => {
    localStorage.setItem('authToken', token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
