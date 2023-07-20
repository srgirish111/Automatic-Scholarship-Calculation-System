import React from "react";
import NavbarComponent from "../navbarst/navbarst";
import { useContext } from "react";
import { AppContext } from "../../App";

const Scholarship= ()=>{
    const { userToken } = useContext(AppContext);
    const { userType } = useContext(AppContext);
    return(
        <div>
            <NavbarComponent/>
            {userToken}
            <br/>
            {userType}
            <br/>
            Scholarship
        </div>
    )
}

export default Scholarship