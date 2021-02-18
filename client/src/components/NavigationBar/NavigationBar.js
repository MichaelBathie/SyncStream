import React, { Component } from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import logo from "../../images/logo.png";
import profilePicture from "../../images/default_account.png";

class NavigationBar extends Component {
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <Image
                        src={logo}
                        width="30"
                        height="30"
                        alt="logo"
                        className="d-inline-block align-top"
                    />
                    {' '} 
                    SyncStream
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/Account">
                        <Image 
                            src={profilePicture}
                            width="30"
                            height="30"
                            roundedCircle
                        />
                        {' '}
                        Account</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;