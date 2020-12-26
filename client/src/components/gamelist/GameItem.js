import React from "react";
import "./GameItem.css"

function GameItem({data}) {
    return (
        <div className="list__item">
            <img className="item__image" alt={data.name} src={data.background_image}/>
            <div className="content">
                <h2>{data.name}</h2>
            </div>
        </div>
    );  
}

export default GameItem;