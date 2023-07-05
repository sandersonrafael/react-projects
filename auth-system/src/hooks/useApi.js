/* eslint-disable no-unreachable */
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default function useApi() {
  return {
    validateToken: async (token) => {
      // fake response 
      return {
        user: { id: 3, name: 'Fulano da Silva', email: 'email@email.com' },
      };
      const response = await api.post('/validate', { token });
      return response.data;
    },
    signin: async (email, password) => {
      // fake response 
      return {
        user: { id: 3, name: 'Fulano da Silva', email: 'email@email.com' },
        token: '123456789',
      };
      const response = await api.post('/signin', { email, password });

      return response.data;
    },
    logout: async () => {
      // fake response
      return { status: true };
      const response = await api.post('/logout');
      return response.data;
    },
  };
}
