import './Header.css';
import logoImg from '../public/img/logo.png';
import userImg from '../public/img/user.jpg';

export default function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={logoImg} alt="SuggestFlix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={userImg} alt="Usuário" />
        </a>
      </div>
    </header>
  );
}
