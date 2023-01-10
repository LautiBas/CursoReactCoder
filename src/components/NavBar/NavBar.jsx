import NavItem from "./NavItem";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <ul className="nav-menu">
            <NavItem href="/"> <img style={{width: 80, height: 80}} src="./logo.png" alt="logo" /></NavItem>
            <Link to="/category/Indumentaria">Indumentaria</Link>
            <Link to="/category/Calzado">Calzado</Link>
            <Link to="/category/Accesorios">Accesorios</Link>
            <CartWidget></CartWidget>
            </ul>
        </nav>
);
}

export default NavBar;
