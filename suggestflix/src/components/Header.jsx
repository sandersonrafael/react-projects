import './Header.css';

export default function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="/src/assets/img/logo-1.png" alt="SuggestFlix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="/src/assets/img/user.jpg" alt="Usuário" />
        </a>
      </div>
    </header>
  );
}
