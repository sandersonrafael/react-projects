import { useContext, useState } from 'react';
import AuthContext from '../../contexts/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // console.log(formData.get('password')); -> os dados poderiam ser obtidos dessa maneira também

    if (email && password) {
      const isLogged = await auth.signin(email, password);
      return isLogged ? navigate('/') : alert('Erro. Revise os campos e tente novamente');
    }
  };

  return (
    <div>
      <h2>Página Fechada</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
          name="email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          name="password"
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
