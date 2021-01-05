import React,{useEffect,useState,useContext} from "react";
import {useHistory} from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";

function Favourite() {
    const [data,setData] = useState([]);
    const { userData } = useContext(UserContext);
    const [user] = useState(userData.user);
    const history = useHistory();

    const checkLoggedIn = async()=>{
        if(userData.user){
            console.log(user);
            console.log(user.username);
            request();
        }
        else{
            history.push("/login");
        }
    }
    const request = async ()=>{
        try{
            const response = await axios.get("http://localhost:5000/games",{
                params:{
                    user:user.username
                }
            });
            setData(response.data);
        } catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        checkLoggedIn();
    },[])
    const renderedList = data.map(data=>{
        return(
            <div className="list__container">
                <div className="list__item">
                    <img className="item__image" alt={data.title} src={data.imageUrl}/>
                    <div className="content">
                        <h2>{data.title}</h2>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <div className="list__body">
        <h1 className="favourite__title">Your favourite games</h1>
        <div className="list">{renderedList}</div>
        </div>
    );
}

export default Favourite;