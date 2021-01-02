import React, { useState } from "react";
import "./Searchbar.css";

function Searchbar({onFormSubmit}) {
    const [search,setSearch] = useState("");
    
    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(search);
    }

return (
<form onSubmit={onSubmit}>
    <input 
    className="search"
    type="text"
    placeholder="Search Games"
    value={search}
    onChange={(event) => setSearch(event.target.value)}></input>
    <button type="submit">submit</button>
</form>
    );
}   
export default Searchbar;