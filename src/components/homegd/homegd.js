import React from "react";
import NavbarComponent from "../navbargd/navbargd";
import { useContext } from "react";
import { AppContext } from "../../App";

const Homegd= ()=>{
    const { userToken } = useContext(AppContext);
    const { userType } = useContext(AppContext);
    return(
        <div>
            <NavbarComponent/>
            {userToken}
            <br/>
            {userType}
            <br/>
            Welcome
        </div>
    )
}

export default Homegd