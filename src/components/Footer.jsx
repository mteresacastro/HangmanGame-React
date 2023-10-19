import { NavLink } from "react-router-dom";
import "../styles/components/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li className="footer__menu-item">
                    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "footer__menu-link pending" : isActive ? "footer__menu-link active" : ""}>A jugar</NavLink>
                    </li>
                    <li className="footer__menu-item">
                    <a className="footer__menu-link" href="#/instructions">¿Cómo se juega?</a>
                    </li>
                    <li className="footer__menu-item">
                    <a className="footer__menu-link" href="#/options">Más opciones</a>
                    </li>
                </ul>
            </nav>
            <small className="footer__copy">© Adalab</small>
      </footer>
   ) 
};

export default Footer;