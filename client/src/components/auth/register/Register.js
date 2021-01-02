import React,{useState,useContext} from "react";
import { useHistory,Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../../misc/ErrorNotice";

function Register() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error, setError] = useState("");
    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
    
        try {
            const newUser = { username,password };
            await axios.post("http://localhost:5000/users/register", newUser);
            const loginRes = await axios.post("http://localhost:5000/users/login", {
            username,
            password,
            });
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
        <div className="auth__wrap">
            <form onSubmit={submit}>
                {error && (
                    <ErrorNotice message={error} clearError={() => setError(undefined)} />
                )}
                <div class="input__wrap">
                    <label htmlFor="register__password">Password</label>
                    <input class="input" type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)}/>
                </div>
                <div className="input__wrap">
                    <label htmlFor="register__password">Password</label>
                    <input className="input" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div className="auth__form__btn-wrap">
                    <button className="auth__form__btn" type="submit">
                        Register
                    </button>
                </div>
                <p>Already registered? Click <span><Link to={"/login"}>here</Link></span>to sign in</p>
            </form>
        </div>
    );
}

export default Register;