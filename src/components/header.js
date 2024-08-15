import { Link } from "react-router-dom";
import "../scss/header.scss";

function Header(){
    return(
        <header>
            <h1 className="logo">
                <Link to="/">PORTFOLIO</Link>
            </h1>

            <nav>
                <ul>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/project">PROJECT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;