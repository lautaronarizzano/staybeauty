import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <h1>StayBeauty</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="dropdown">
            Catalogo
            <ul className="dropdown-list">
              {/* <Link to='/'> */}
                <li>a</li>
              {/* </Link> */}
              {/* <Link to='/'> */}
                <li>b</li>
              {/* </Link> */}
              {/* <Link to='/'> */}
                <li>c</li>
              {/* </Link> */}
            </ul>
          </li>
          <li className="abaout us">Sobre Nosotros</li>
          <li className="contact">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
