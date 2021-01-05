import React,{useState,useContext} from "react";
import { useHistory,Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../../misc/ErrorNotice";

function Login() {
    const [username,setUsername] = useState("");    
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const {setUserData} = useContext(UserContext);
    const history = useHistory();
    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { username, password };
            const loginRes = await axios.post(
            "http://localhost:5000/users/login",
            loginUser
            );
            setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
        }
    };
    return(
        <div className="auth__body">
            <div className="auth__wrap">
                <form className="auth__form" onSubmit={submit}>
                    {error && (
                        <ErrorNotice message={error} clearError={() => setError(undefined)} />
                    )}
                    <div className="auth__title">Login</div>
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
                    <p>Don't have an account? Click <span><Link to={"/register"}>here</Link></span> to register</p>
                </form>
            </div>
        </div>
    );
}

export default Login;