import React,{useEffect,useState} from "react";
import GameList from "../gamelist/GameList";
import Searchbar from "../searchbar/Searchbar";
import axios from "axios";

function Home() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        request();
    },[])
    const request = async ()=> {
        console.log("request called")
        const response = await axios.get('https://rawg-video-games-database.p.rapidapi.com/games',
        {
        headers:{
            'x-rapidapi-key': '54cc4e07fcmsh3d78b5daa1093ebp16efe5jsn63124395af6f',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        }
        });
        setData(response.data.results);
    }
    
    return(
        <div>
            <Searchbar/>
            <GameList data={data}/>
        </div>
    );
}

export default Home;