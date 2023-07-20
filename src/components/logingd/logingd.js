import React, { useState } from "react"
import "./logingd.css"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "../../App";

const Logingd = () => {
    const navigate = useNavigate();
    const { setUserToken, setUserType } = useContext(AppContext);  
    const [user, setUser] = useState({
        id: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const {
            id,
            password
        } = user;
        const temp= user.id;
        setUserToken(temp);
        setUserType("guide");
        localStorage.setItem("userToken", user.id);
        localStorage.setItem("userType", "guide");
        navigate("/Homegd");
      };

    return (
        <div className="login">
            <div className="form">
                <center><h2>LOGIN</h2></center>
                <input type="text" name="id" value={user.id} onChange={handleChange} placeholder="Enter your ID"></input>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                <div className="button" onClick={register}>Login</div>
            </div>
        </div>
    )
}
export default Logingd
