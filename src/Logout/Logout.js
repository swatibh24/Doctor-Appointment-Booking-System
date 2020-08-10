import React, {useState} from 'react';
import {fetchLogout} from "../Services/services";
import {useHistory} from "react-router-dom";
function Logout({props}){
    const [error, setError] = useState("");
    const history = useHistory();
    const performLogout = function(){
        fetchLogout(props.user)
            .then( function(response){
            props.setIsLoggedIn(false);
            props.setUser("");
            history.push(`/`);
        }).catch(error => {setError(error.message)});
            props.setUser("");
    };
    return (
        <div>{performLogout()}</div>
    );
}
export default Logout;


