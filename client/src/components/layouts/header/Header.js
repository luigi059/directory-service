import React from "react";
import {useHistory} from "react-router-dom";
import AuthOptions from "../../auth/AuthOption";

function Header() {
    const history = useHistory();
    const games = () => history.push("/");
    const favourite = () => history.push("/favourites");

return (
<header className="header">
    <div className="logo" onClick={games}><h1 className="logo__text">Game Tracker</h1></div>
    <nav className="navigation">
        <button onClick={games}>Games</button>
        <button onClick={favourite}>Favourites</button>
    </nav>
    <AuthOptions />
</header>
    );
}   
export default Header;