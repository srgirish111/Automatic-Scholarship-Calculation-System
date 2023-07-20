import React from "react";
import NavbarComponent from "../navbarst/navbarst";
import { useContext } from "react";
import { AppContext } from "../../App";

const Approval= ()=>{
    const { userToken } = useContext(AppContext);
    const { userType } = useContext(AppContext);
    return(
        <div>
            <NavbarComponent/>
            {userToken}
            <br/>
            {userType}
            <br/>
            Approval
        </div>
    )
}

export default Approval