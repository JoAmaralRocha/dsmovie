import { ReactComponent as GuithubIcon } from 'Assets/img/github.svg';
import './styles.css';
function Navbar() {

  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/JoAmaralRocha/dsmovie">
            <div className="dsmmovie-contact-conteiner" >
              <GuithubIcon />
              <p className="dsmovie-contact-link">/devsuperior</p>
            </div>
          </a>

        </div>
      </nav>
    </header>
  );
}
export default Navbar;