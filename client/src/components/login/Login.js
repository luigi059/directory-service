import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return(
        <div className="auth__wrap">
            <form>
                <div class="input__wrap">
                    <input class="input" type="text" name="username" placeholder="Username"/>
                </div>
                <div className="input__wrap">
                    <input className="input" type="password" name="password" placeholder="Password"/>
                </div>
                <div class="auth__form__btn-wrap">
                    <button class="auth__form__btn">
                        Login
                    </button>
                </div>
                <p>Don't have an account? Click <span><Link to={"/auth/register"}>here</Link></span>to register</p>
            </form>
        </div>
    );
}

export default Login;