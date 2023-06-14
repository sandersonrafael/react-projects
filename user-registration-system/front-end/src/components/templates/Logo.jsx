import { Link } from 'react-router-dom';

import './Logo.css';
import logo from '../../assets/imgs/add-users-system.jpg';

const Logo = (props) => (
  <aside className="logo">
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  </aside>
);

export default Logo;
