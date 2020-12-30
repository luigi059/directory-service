import React,{useEffect,useState} from "react";
import GameList from "../gamelist/GameList";
import Searchbar from "../searchbar/Searchbar";
import axios from "axios";

function Home() {
    const [data,setData] = useState([]);
    const [nextUrl,setNextUrl] =useState("");

    useEffect(()=>{
        request();
    },[])
    const request = async ()=> {
        const response = await axios.get('https://rawg-video-games-database.p.rapidapi.com/games',
        {
        headers:{
            'x-rapidapi-key': '54cc4e07fcmsh3d78b5daa1093ebp16efe5jsn63124395af6f',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
        }
        });
        setData(response.data.results);
        setNextUrl(response.data.next);
    }
    const next = async ()=>{
        const response = await axios.get(nextUrl,{});
        setData(response.data.results);
        setNextUrl(response.data.next);
    }
    const onSubmit = async search =>{
        console.log("search is working!")
        const response = await axios.get(`https://api.rawg.io/api/games?search=${search}&search_precise=true`,{});
        setData(response.data.results);
    }
    
    return(
        <div>
            <Searchbar onFormSubmit={onSubmit}/>
            <GameList data={data}/>
            <div>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
}

export default Home;