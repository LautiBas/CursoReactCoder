import CartWidget from "./CartWidget";

function NavBar(){
    return(
    <nav>
        <ul>
            <li>
            <a href="/">Inicio</a>
            </li>
            <li>
            <a href="/">Catalogo</a>
            </li>
            <li>
            <a href="/">OFERTAS!</a>
            </li>
            <li>
            <a href="/">Registrate</a>
            </li>
        </ul>
        <CartWidget></CartWidget>
    </nav>
);
}

export default NavBar;
