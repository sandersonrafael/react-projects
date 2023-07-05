import { Route, Routes, Link } from 'react-router-dom';

import Home from './pages/Home';
import Private from './pages/Private';
import RequireAuth from './contexts/Auth/RequireAuth';
import { useContext } from 'react';
import AuthContext from './contexts/Auth/AuthContext';
import './App.css';

export default function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
  };

  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
          {auth.user && <Link to="/" onClick={handleLogout}>Sair</Link>}
        </nav>
      </header>

      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}
