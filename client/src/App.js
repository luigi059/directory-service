import React,{useState,useEffect} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import axios from "axios";
import './App.css';
import Header from "./components/layouts/header/Header";
import Footer from "./components/layouts/footer/Footer";
import Home from "./components/pages/Home";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import UserContext from "./components/context/UserContext";
import Favourite from "./components/pages/Favourite";

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  // check localstorage if user is logged in
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    const tokenRes = await axios.post(
      "http://localhost:5000/users/tokenIsValid",
      null,
      { headers: { "x-auth-token": token } }
    );
    if (tokenRes.data) {
      const userRes = await axios.get("http://localhost:5000/users/", {
        headers: { "x-auth-token": token },
      });
      setUserData({
        token,
        user: userRes.data,
      });
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <Router>
      {/* all components now have access to userData thanks to useContext */}
      <UserContext.Provider value={{userData,setUserData}}>
      <div>
        <Header/>
        <Switch>
{/*           <Route exact path="/" component={Home} /> */}
          <Route path="/favourites" component={Favourite} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Footer/>
      </div>
      </UserContext.Provider>
    </Router>
  );    
}

export default App;