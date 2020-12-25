import React,{useEffect} from "react";
import './App.css';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get("/home").then(response=>{
      console.log(response);
    });
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;