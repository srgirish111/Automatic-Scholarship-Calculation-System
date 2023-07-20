import React from "react";
import NavbarComponent from "../navbarst/navbarst";
import { useContext } from "react";
import { AppContext } from "../../App";

const Homest= ()=>{
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

export default Homest