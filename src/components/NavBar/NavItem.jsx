import { Link } from "react-router-dom";

const NavItem = ({ href, children }) => {
    // text = {text: "Calzado"}

    return (
    <li className="nav-item">
        <Link className="nav-link" to={href}>
        {children}
        </Link>
    </li>
    );
};

export default NavItem;