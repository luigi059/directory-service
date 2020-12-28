import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./Register.css";

function Register({onFormSubmbit}) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const onSubmit = event => {
        event.preventDefault();
        onFormSubmbit(username,password,"register");
        console.log("form data passed");
    }
    return(
        <div className="auth__wrap">
            <form onSubmit={onSubmit}>
                <div class="input__wrap">
                    <input class="input" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="input__wrap">
                    <input className="input" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="auth__form__btn-wrap">
                    <button className="auth__form__btn" type="submit">
                        Register
                    </button>
                </div>
                <p>Already registered? Click <span><Link to={"/auth"}>here</Link></span>to sign in</p>
            </form>
        </div>
    );
}

export default Register;