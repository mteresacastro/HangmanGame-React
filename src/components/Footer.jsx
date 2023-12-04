import { NavLink } from "react-router-dom";
import "../styles/components/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li className="footer__menu-item">
                        <NavLink to="/" className="footer__menu-link">A jugar</NavLink>
                    </li>
                    <li className="footer__menu-item">
                        <NavLink to="/Instructions" className="footer__menu-link">¿Cómo se juega?</NavLink>
                    </li>
                    <li className="footer__menu-item">
                        <NavLink to="/Options" className="footer__menu-link">Más Opciones</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="footer__credits">
                <small className="footer__copy">© Adalab</small>
                <small className="footer__copy">@mteresacastro</small>
            </div>
        </footer>
    )
};

export default Footer;

// <NavLink to="/Instructions" className={({ isActive, isPending }) => isPending ? "footer__menu-link pending" : isActive ? "footer__menu-link active" : ""}>¿Cómo se juega?</NavLink>

