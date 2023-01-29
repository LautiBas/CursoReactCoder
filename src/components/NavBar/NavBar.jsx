import { useContext } from "react";

import NavItem from "./NavItem";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { cartContext } from "../../storage/cartContext";
import CartWidget from "./CartWidget";

function NavBar(props){
    const context = useContext(cartContext);
    context.test();

    function handleSubmit(evt) {
    evt.preventDefault();
    let user = evt.target.elements[0].value;
    console.log(user);
    props.onLogin(user);
}

    return(
        <nav>
            <ul className="nav-menu">
            <NavItem href="/"> <img style={{width: 80, height: 80}} src="./logo.png" alt="logo" /></NavItem>
            <Link to="/category/Indumentaria">Indumentaria</Link>
            <Link to="/category/Calzado">Calzado</Link>
            <Link to="/category/Accesorios">Accesorios</Link>
            <form onSubmit={handleSubmit}>
        Iniciar sesión
        <input name="user"></input>
        <Button onClick={props.onLogout}>Log Out</Button>
        </form>
        <Link to="/cart">
        <CartWidget />
        </Link>
    </ul>
    </nav>
);
}

export default NavBar;
