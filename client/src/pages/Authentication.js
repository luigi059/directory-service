import React from "react";
import { Switch,Route } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

function Authentication() {
    return(
        <div className="auth">
            <Switch>
                <Route path={"/auth/register"}>
                    <Register/>
                </Route>
                <Route path={"/auth"}>
                    <Login/>
                </Route>
            </Switch>
        </div>
    );
}

export default Authentication;