import './Logo.css';
import logo from '../../assets/imgs/add-users-system.jpg';

const Logo = (props) => (
  <aside className="logo">
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
  </aside>
);

export default Logo;
