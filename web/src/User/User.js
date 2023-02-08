import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../utils";
import md5 from "js-md5";
import "./User.css";
import { UserIdContext } from "../App";

const Login = (props) => {
    const defaulusername = "Username here";
    const defaultpassword = "Password here";
    const [username, setUsername] = useState(defaulusername);
    const [password, setPassword] = useState(defaultpassword);
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const navigate = useNavigate();
    const [userId, setUserId] = useContext(UserIdContext);
    const handleLogin = (e) => {
        e.preventDefault();
        post("/api/login", {
            username: username,
            password: md5(password),
        })
            .then((response) => alert(response))
            .then(() => navigate("/"))
            .then(() => props.getUserInfo && props.getUserInfo())
            .catch((error) => alert.log(error));
    };
    useEffect(() => {
        if (userId) {
            navigate("/");
        }
    }, [userId]);
    return (
        <div className="Login-container u-flexColumn">
            <input placeholder={defaultUsername} value={username} onChange={handleUsernameChange}></input>
            <input placeholder={defaultPassword} value={password} onChange={handlePasswordChange}></input>
            <button className="button" onClick={handleLogin}>Login</button>
            <div className="Login-register">
                {"Don't have an account? "}
                <Link to="/register">Register!</Link>
            </div>
        </div>
    );
};
const Register = (props) => {
    const defaultUsername = "Username here";
    const defaultPassword = "Password here";
    const defaultPasswordAgain = "Password again";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handlePasswordAgainChange = (event) => {
        setPasswordAgain(event.target.value);
    };

    const userId = useContext(UserIdContext);

    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        if (password !== passwordAgain) {
            alert("Passwords Are Not Identical!");
        } else {
            post("user/register/", {
                username: username,
                password: md5(password)
            })
                .then((response) => alert(response))
                .then(() => navigate("/"))
                .catch((error) => alert(error));
        }
    };
    
    useEffect(() => {
        if (userId) {
            navigate("/");
        }
    }, [userId]);

    return (
        <div className="Register-container u-flexColumn">
            <input placeholder={defaultUsername} value={username} onChange={handleUsernameChange}></input>
            <input placeholder={defaultPassword} value={password} onChange={handlePasswordChange}></input>
            <input placeholder={defaultPasswordAgain} value={passwordAgain} onChange={handlePasswordAgainChange}></input>
            <button onClick={handleRegister} className="button">Register</button>
        </div>
    );
}
export { Login, Register };