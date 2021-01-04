import React,{useEffect, useState, useRef, useContext} from "react";
import {useHistory} from "react-router-dom"; 
import axios from "axios";
import UserContext from "../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";
import "./GameItem.css"

function GameItem({data}) {
    const { userData } = useContext(UserContext);
    const firstUpdate = useRef(true);
    const [error, setError] = useState("");
    const [user,setUser] = useState("");
    const [gameName,setGameName] = useState("");
    const [gameImageUrl,setGameImageUrl] = useState("");
    const history = useHistory();

    const onSubmit = async()=> {
        if(!userData.user){
            history.push("/login");
        }
        setUser(userData.user);
        setGameName(data.name);
        setGameImageUrl(data.background_image);
    }

    const saveGame = async()=>{
        try{
            const newGame = {user,gameName,gameImageUrl}
            await axios.post("http://localhost:5000/games/save", newGame);
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    }

    useEffect(()=>{
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        saveGame();
    },[gameName])

    return (
        <div className="list__item">
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            <img className="item__image" alt={data.name} src={data.background_image}/>
            <div className="content">
                <h2>{data.name}</h2>
                <button onClick={onSubmit}>add</button>
            </div>
        </div>
    );  
}

export default GameItem;