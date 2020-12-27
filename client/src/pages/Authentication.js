import React from "react";
import { Switch,Route } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

function Authentication() {
    return(
        <div className="auth">
            <Switch>
                <Route path={"/users/register"}>
                    <Register/>
                </Route>
                <Route path={"/users/login"}>
                    <Login/>
                </Route>
            </Switch>
        </div>
    );
}

export default Authentication;