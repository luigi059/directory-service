import React from "react";
import GameItem from "./GameItem";
import "./GameList.css";

function GameList({data}) {
    const renderedList = data.map(data =>{
        return(
            <GameItem
                key={data.id}
                data={data}
            />
        );
    });
    return (
        <div className="list">{renderedList}</div>   
    );
}

export default GameList;