import './Home.css';
import Main from '../templates/Main';

const Home = (props) => (
  <Main icon="home" title="Início" subtitle="Segundo projeto React.">
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">
      Sistema para exemplificar a construção de um cadastro desenvolvido em
      React!
    </p>
  </Main>
);

export default Home;
