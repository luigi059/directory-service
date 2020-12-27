import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
return (
<header className="header">
    <div className="logo"><h1 className="logo__text">Game Tracker</h1></div>
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item"><Link to="/">Games</Link></li>
            <li className="navigation__item">Favourites</li>
            <li className="navigation__item"><Link to="/auth">Log In</Link></li>
        </ul>
    </nav>
</header>
    );
}   
export default Navbar;