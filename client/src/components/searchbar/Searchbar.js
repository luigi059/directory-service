import React, { useState } from "react";

function Searchbar({onFormSubmit}) {
    const [search,setSearch] = useState("");
    
    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(search);
    }

return (
    <form onSubmit={onSubmit}>
        <div className="search">
            <input 
            className="input search__input"
            type="text"
            placeholder="Search Games..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}></input>
            <button className="auth__form__btn search__btn" type="submit">Submit</button>
        </div>
    </form>
    );
}   
export default Searchbar;