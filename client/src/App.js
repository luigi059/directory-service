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
          <Route path="/auth">
            <Authentication/>
          </Route>
          <Route path="/">
          {/* <Home/> */}
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );    
}

export default App;