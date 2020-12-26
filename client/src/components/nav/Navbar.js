import React from "react";
import "./Navbar.css";

function Navbar() {
return (
<header className="header">
    <div className="logo"><h1 className="logo__text">Game Tracker</h1></div>
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation__item">Games</li>
            <li className="navigation__item">Favourites</li>
        </ul>
    </nav>
    <div></div>
    <div className="auth">Log In</div>
</header>
    );
}   
export default Navbar;