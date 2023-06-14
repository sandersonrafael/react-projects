import './Footer.css';

const Footer = (props) => (
  <footer className="footer">
    <span>
      Desenvolvido com <i className="fa fa-heart text-danger"></i> por
      <strong>
        {' '}
        <a
          href="https://www.linkedin.com/in/sandersonrafael/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          Sanderson Rafael
        </a>
      </strong>
    </span>
  </footer>
);

export default Footer;
