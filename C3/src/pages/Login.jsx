import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";


const Login = () => {
    const {login, auth} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const Navigation = useNavigate()

    const handleemail = (e) => {
        setEmail(e.target.value)
    }
    const handlepassword = (e) => {
        setPassword(e.target.value)
    }
    const handlenavigation = () => {
        if (auth) {
            Navigation("/Home")
        }
    }
    return (
        <div>
            <input data-cy="login-email"
                onChange={handleemail}/>
            <input data-cy="login-password"
                onChange={handlepassword}/>
            <button data-cy="login-submit"
                onClick={
                 ()=>  {
                  handlenavigation()
                        login(email, password)
                       
                    }
            }>Login</button>
        </div>
    );
};

export default Login;
