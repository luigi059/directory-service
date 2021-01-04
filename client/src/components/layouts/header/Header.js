import React from "react";
import {Link} from "react-router-dom";
import AuthOptions from "../../auth/AuthOption";
import "./Header.css";

function Header() {
return (
<header className="header">
    <h1 className="logo__text">Game Tracker</h1>
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item"><Link to="/">Games</Link></li>
            <li className="navigation__item"><Link to="/favourites">Favourites</Link></li>
        </ul>
    </nav>
    <AuthOptions />
</header>
    );
}   
export default Header;