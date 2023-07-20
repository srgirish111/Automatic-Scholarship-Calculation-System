import React from "react";
import "./navbarst.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from "react";
import { AppContext } from "../../App";

const NavbarComponent= () => {
    const { userToken } = useContext(AppContext);
    return(
       <div>
         <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/homest">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/Scholarship">scholarship</Nav.Link>
                    <Nav.Link href="/Attendance">Attendance</Nav.Link>
                    <Nav.Link href="/Approval">Approval</Nav.Link>
                    <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
            </Container>
         </Navbar>
       </div>
    )
}

export default NavbarComponent
