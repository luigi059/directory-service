import React,{useEffect,useState} from "react";
import api from "./components/api/api";
import './App.css';
import Navbar from "./components/nav/Navbar";
import Searchbar from "./components/searchbar/Searchbar";
import GameList from "./components/gamelist/GameList";
import Footer from "./components/footer/Footer";
import axios from "axios";

function App() {
  const [data,setData] = useState([]);

/*   useEffect(()=>{
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
  } */
  return (
    <div>
      <Navbar/>
      <Searchbar/>
{/*       <GameList data={data}/> */}
      <Footer/>
    </div>
  );    
}

export default App;