import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/contacts"
            >
                Contatos
            </NavLink>
        </nav>
    );
};

export default Navbar;