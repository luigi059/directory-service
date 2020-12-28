import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login({onFormSubmbit}) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const onSubmit = event => {
        event.preventDefault();
        onFormSubmbit(username,password,"login");
        console.log("form data passed");
    }
    return(
        <div className="auth__wrap">
            <form onSubmit={onSubmit}>
                <div className="input__wrap">
                    <input className="input" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="input__wrap">
                    <input className="input" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="auth__form__btn-wrap">
                    <button className="auth__form__btn" type="submit">
                        Login
                    </button>
                </div>
                <p>Don't have an account? Click <span><Link to={"/auth/register"}>here</Link></span>to register</p>
            </form>
        </div>
    );
}

export default Login;