import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <span className="navbar-brand">Mini E-commerce</span>
            <div className="navbar-nav">
                <NavLink to="/" end className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    Chi siamo
                </NavLink>
                <NavLink to="/products" className="nav-link">
                    Prodotti
                </NavLink>
            </div>
        </nav>
    );
}
