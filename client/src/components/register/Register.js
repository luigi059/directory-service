import React from "react";
import {Link} from "react-router-dom";
import "./Register.css";

function Register() {
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
                        Register
                    </button>
                </div>
                <p>Already registered? Click <span><Link to={"/auth"}>here</Link></span>to sign in</p>
            </form>
        </div>
    );
}

export default Register;