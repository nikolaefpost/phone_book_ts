import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Spinner} from 'reactstrap';
import {ABOUT_EMPTY_ROUTE, CONTACTS_ROUTE, ERROR_ROUTE, HOME_ROUTE} from "../utils/consts";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Error from "../pages/Error";


const NavBar = () => {
    const [navbar, setNavbar] = useState(false)
    const {error, loading} = useTypedSelector(state => state.contact)
    const history = useHistory();

    if (loading) {
        return (
            <Spinner color="secondary" size="">
                Loading...
            </Spinner>
        )
    }
    if (error) {
        return <Error/>
    }
    return (
            <Navbar
                color="dark"
                container="xl"
                dark
                expand="md"
                fixed="top"
                light
            >
                <NavbarBrand onClick={() => {
                    history.push(HOME_ROUTE)
                }}>
                    PHONE BOOK
                </NavbarBrand>
                <NavbarToggler onClick={() => {
                    setNavbar((pre) => !pre)
                }}/>
                <Collapse navbar isOpen={navbar}>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink
                                onClick={() => {
                                    history.push(CONTACTS_ROUTE)
                                }}
                            >
                                CONTACTS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {
                                history.push(ABOUT_EMPTY_ROUTE)
                            }}>
                                ABOUT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {
                                history.push(ERROR_ROUTE)
                            }}>
                                ERROR 404
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
    );
};

export default NavBar;