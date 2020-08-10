import React, {useEffect, useState} from 'react';
import { fetchLogin , fetchLoginStatus} from '../Services/services';
import './login.css';
import {useHistory} from "react-router-dom";
import Error from "../Error/Error";
import ErrorMessages from "../Error/ErrorMessages"

function Login({props}){
    const [error, setError] = useState("");
    const [username, setUserName] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const history = useHistory();

    useEffect(() => {
        fetchLoginStatus()
            .then(obj => {
                props.setIsLoggedIn(true);
            }).catch((error) => {
                setMessage(error.message);
                props.setIsLoggedIn(false);
            });
    }, []);

    const performLogin = (() => {
        fetchLogin({username})
            .then( function(response) {
                props.setUser(username);
                props.setIsLoggedIn(true);
                history.push(`/hospitals`);
            })
            .catch((err) =>{
                setMessage(ErrorMessages[err.code] || err.code || ErrorMessages['DEFAULT']);
                props.setIsLoggedIn(false);
            });
    });

    const handleInput = ((input) => {
        setUserName(input);
        if(input === ""){
            setDisabled(true);
        }else{
            setDisabled(false);
        }
    });

    return (
        <div className = "login-page">
            <div className="login">
                <div>
                    <img className="logo" src="/images/logo.jpg"  alt="homepage"  />
                    <h1 className="login-header">Customer Login:</h1>
                </div>
                <div className="input-holder">
                    <input className="form-control basic-input selector"  type="username" placeholder="Enter username" value={username} onChange={e => handleInput(e.target.value)}/>
                </div>
                <div>
                    <button className="login-user" type="submit" disabled={disabled} onClick={performLogin}>Login</button>
                </div>
                <div className="error-mess"><Error message={message}/></div>
            </div>
        </div>
    );
}

export default Login;

