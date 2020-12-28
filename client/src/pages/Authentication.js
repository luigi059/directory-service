import React from "react";
import { Switch,Route } from "react-router-dom";
import axios from "axios";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

function Authentication() {
    const onSubmit = async (username,password,url) => {
        const data = {username:username,password:password};
        await axios.post(`http://localhost:5000/users/${url}`,data);
        console.log("data submitted");
    }
    return(
        <div className="auth">
            <Switch>
                <Route path={"/auth/register"}>
                    <Register onFormSubmbit={onSubmit}/>
                </Route>
                <Route path={"/auth"}>
                    <Login onFormSubmbit={onSubmit}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Authentication;