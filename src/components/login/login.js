import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { Link,useNavigate } from "react-router-dom"
const Login = () => {
    const navigate =useNavigate();
    const [user, setUser] = useState({
        Id: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    return (
        <div className="login">
            <div className="form">
                <center><h2>LOGIN</h2></center>
                <input type="text" name="Id" value={user.Id} onChange={handleChange} placeholder="Enter your ID"></input>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
                <div className="button" >Login</div>
                <div>or</div>
                <Link to ="/Registerst">Register as student</Link>
                <br/>
                <div>or</div>
                <Link to ="/Logingd">Login as Guide</Link>
            </div>
        </div>
    )
}
export default Login