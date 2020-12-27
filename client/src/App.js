import React from "react";
import './App.css';
import Navbar from "./layouts/nav/Navbar";
import Footer from "./layouts/footer/Footer";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path="/users/login">
            <Authentication/>
          </Route>
          <Route path="/">
            {/* <Home/> */}
          </Route>
        </Switch>
        <Footer/>
    {/*       <GameList data={data}/> */}
      </div>
    </Router>
  );    
}

export default App;