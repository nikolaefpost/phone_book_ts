import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Spinner } from 'reactstrap';
import { CONTACTS_ROUTE, HOME_ROUTE} from "../utils/consts";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


const NavBar = () => {
    const [navbar, setNavbar] = useState(true)
    console.log(navbar)
    const contacts = useTypedSelector(state => state.contact)
    const history = useHistory();
    const {fetchContacts} = useActions()
    const loadContact = () => {
        fetchContacts()
    }
    if (contacts.loading) {
        return( <Spinner
                    color="secondary"
                    size=""
                >
                    Loading...
                </Spinner>)
    }
    if (contacts.error) {
        return <h1>{contacts.error}</h1>
    }
    return (
        <div className=''>
            <Navbar
                color="dark"
                container="xl"
                dark
                expand="md"
                fixed="top"
                light

            >
                <NavbarBrand onClick={()=>{
                                    history.push(HOME_ROUTE)
                                }}>
                    PHONE BOOK
                </NavbarBrand>
                <NavbarToggler onClick={()=>{setNavbar((pre)=>!pre)}} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar={navbar}
                    >
                        <NavItem>
                            <NavLink
                                onClick={()=>{history.push(CONTACTS_ROUTE)}}
                            >
                                CONTACTS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={loadContact}>
                                Load Contact
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;